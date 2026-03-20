// ============================================================
// Hashi and Winnie Story Time — Alexa Skill Lambda Handler
// ============================================================

const Alexa = require("ask-sdk-core");
const { STORIES } = require("./stories");

// ----------------------------------------------------------
// Helpers
// ----------------------------------------------------------

function getRandomStory(lastStoryId) {
  if (STORIES.length === 0) return null;
  if (STORIES.length === 1) return STORIES[0];

  // Avoid repeating the last story played
  let candidates = STORIES.filter((s) => s.id !== lastStoryId);
  if (candidates.length === 0) candidates = STORIES;

  return candidates[Math.floor(Math.random() * candidates.length)];
}

function findStoryByName(spokenName) {
  if (!spokenName) return null;
  const input = spokenName.toLowerCase().trim();

  // Exact match on any trigger name
  for (const story of STORIES) {
    if (story.names.some((n) => n.toLowerCase() === input)) {
      return story;
    }
  }

  // Fuzzy fallback: partial containment either direction
  for (const story of STORIES) {
    if (
      story.names.some(
        (n) =>
          n.toLowerCase().includes(input) || input.includes(n.toLowerCase())
      )
    ) {
      return story;
    }
  }

  return null;
}

function speakStory(story) {
  return `<speak>Here's a Hashi and Winnie story called ${story.title}. <break time="1s"/> ${story.text} <break time="2s"/> Would you like to hear another story?</speak>`;
}

function storyListForSpeech() {
  const titles = STORIES.map((s) => s.title);
  if (titles.length === 0) return "I don't have any stories yet.";
  if (titles.length === 1) return `I have one story called ${titles[0]}.`;
  const last = titles.pop();
  return `I have these stories: ${titles.join(", ")}, and ${last}.`;
}

// ----------------------------------------------------------
// Launch — "Alexa, open Hashi and Winnie"
// ----------------------------------------------------------
const LaunchRequestHandler = {
  canHandle(handlerInput) {
    return (
      Alexa.getRequestType(handlerInput.requestEnvelope) === "LaunchRequest"
    );
  },
  handle(handlerInput) {
    const story = getRandomStory(null);

    if (!story) {
      return handlerInput.responseBuilder
        .speak("I don't have any stories yet. Ask Daddy to add some!")
        .getResponse();
    }

    // Save last story id in session so we avoid repeats
    const sessionAttributes =
      handlerInput.attributesManager.getSessionAttributes();
    sessionAttributes.lastStoryId = story.id;
    handlerInput.attributesManager.setSessionAttributes(sessionAttributes);

    return handlerInput.responseBuilder
      .speak(speakStory(story))
      .reprompt("Would you like to hear another story?")
      .getResponse();
  },
};

// ----------------------------------------------------------
// RandomStoryIntent — "tell me a story"
// ----------------------------------------------------------
const RandomStoryIntentHandler = {
  canHandle(handlerInput) {
    return (
      Alexa.getRequestType(handlerInput.requestEnvelope) === "IntentRequest" &&
      Alexa.getIntentName(handlerInput.requestEnvelope) === "RandomStoryIntent"
    );
  },
  handle(handlerInput) {
    const sessionAttributes =
      handlerInput.attributesManager.getSessionAttributes();
    const story = getRandomStory(sessionAttributes.lastStoryId || null);

    if (!story) {
      return handlerInput.responseBuilder
        .speak("I don't have any stories yet!")
        .getResponse();
    }

    sessionAttributes.lastStoryId = story.id;
    handlerInput.attributesManager.setSessionAttributes(sessionAttributes);

    return handlerInput.responseBuilder
      .speak(speakStory(story))
      .reprompt("Would you like to hear another story?")
      .getResponse();
  },
};

// ----------------------------------------------------------
// SpecificStoryIntent — "play bathtime"
// ----------------------------------------------------------
const SpecificStoryIntentHandler = {
  canHandle(handlerInput) {
    return (
      Alexa.getRequestType(handlerInput.requestEnvelope) === "IntentRequest" &&
      Alexa.getIntentName(handlerInput.requestEnvelope) ===
        "SpecificStoryIntent"
    );
  },
  handle(handlerInput) {
    const spokenName = Alexa.getSlotValue(
      handlerInput.requestEnvelope,
      "storyName"
    );
    const story = findStoryByName(spokenName);

    if (!story) {
      const fallback = `I couldn't find a story called ${spokenName}. ${storyListForSpeech()} Which one would you like?`;
      return handlerInput.responseBuilder
        .speak(fallback)
        .reprompt("Which story would you like to hear?")
        .getResponse();
    }

    const sessionAttributes =
      handlerInput.attributesManager.getSessionAttributes();
    sessionAttributes.lastStoryId = story.id;
    handlerInput.attributesManager.setSessionAttributes(sessionAttributes);

    return handlerInput.responseBuilder
      .speak(speakStory(story))
      .reprompt("Would you like to hear another story?")
      .getResponse();
  },
};

// ----------------------------------------------------------
// ListStoriesIntent — "what stories do you have?"
// ----------------------------------------------------------
const ListStoriesIntentHandler = {
  canHandle(handlerInput) {
    return (
      Alexa.getRequestType(handlerInput.requestEnvelope) === "IntentRequest" &&
      Alexa.getIntentName(handlerInput.requestEnvelope) === "ListStoriesIntent"
    );
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder
      .speak(`${storyListForSpeech()} Which one would you like?`)
      .reprompt("Which story would you like to hear?")
      .getResponse();
  },
};

// ----------------------------------------------------------
// AnotherStoryIntent — "another one" / "one more"
// ----------------------------------------------------------
const AnotherStoryIntentHandler = {
  canHandle(handlerInput) {
    return (
      Alexa.getRequestType(handlerInput.requestEnvelope) === "IntentRequest" &&
      Alexa.getIntentName(handlerInput.requestEnvelope) ===
        "AnotherStoryIntent"
    );
  },
  handle(handlerInput) {
    const sessionAttributes =
      handlerInput.attributesManager.getSessionAttributes();
    const story = getRandomStory(sessionAttributes.lastStoryId || null);

    if (!story) {
      return handlerInput.responseBuilder
        .speak("I don't have any stories yet!")
        .getResponse();
    }

    sessionAttributes.lastStoryId = story.id;
    handlerInput.attributesManager.setSessionAttributes(sessionAttributes);

    return handlerInput.responseBuilder
      .speak(speakStory(story))
      .reprompt("Would you like to hear another story?")
      .getResponse();
  },
};

// ----------------------------------------------------------
// Built-in intents: Help, Stop/Cancel, Yes/No, Fallback
// ----------------------------------------------------------
const HelpIntentHandler = {
  canHandle(handlerInput) {
    return (
      Alexa.getRequestType(handlerInput.requestEnvelope) === "IntentRequest" &&
      Alexa.getIntentName(handlerInput.requestEnvelope) === "AMAZON.HelpIntent"
    );
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder
      .speak(
        `You can say "tell me a story" for a random story, or ask for one by name, like "play bathtime." ${storyListForSpeech()}`
      )
      .reprompt("What would you like to do?")
      .getResponse();
  },
};

const StopIntentHandler = {
  canHandle(handlerInput) {
    return (
      Alexa.getRequestType(handlerInput.requestEnvelope) === "IntentRequest" &&
      (Alexa.getIntentName(handlerInput.requestEnvelope) ===
        "AMAZON.StopIntent" ||
        Alexa.getIntentName(handlerInput.requestEnvelope) ===
          "AMAZON.CancelIntent")
    );
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder
      .speak("Goodnight! Sweet dreams from Hashi and Winnie.")
      .getResponse();
  },
};

const YesIntentHandler = {
  canHandle(handlerInput) {
    return (
      Alexa.getRequestType(handlerInput.requestEnvelope) === "IntentRequest" &&
      Alexa.getIntentName(handlerInput.requestEnvelope) === "AMAZON.YesIntent"
    );
  },
  handle(handlerInput) {
    // Treat "yes" as a request for another random story
    const sessionAttributes =
      handlerInput.attributesManager.getSessionAttributes();
    const story = getRandomStory(sessionAttributes.lastStoryId || null);

    if (!story) {
      return handlerInput.responseBuilder
        .speak("I don't have any more stories right now!")
        .getResponse();
    }

    sessionAttributes.lastStoryId = story.id;
    handlerInput.attributesManager.setSessionAttributes(sessionAttributes);

    return handlerInput.responseBuilder
      .speak(speakStory(story))
      .reprompt("Would you like to hear another story?")
      .getResponse();
  },
};

const NoIntentHandler = {
  canHandle(handlerInput) {
    return (
      Alexa.getRequestType(handlerInput.requestEnvelope) === "IntentRequest" &&
      Alexa.getIntentName(handlerInput.requestEnvelope) === "AMAZON.NoIntent"
    );
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder
      .speak("Okay! Goodnight from Hashi and Winnie!")
      .getResponse();
  },
};

const FallbackIntentHandler = {
  canHandle(handlerInput) {
    return (
      Alexa.getRequestType(handlerInput.requestEnvelope) === "IntentRequest" &&
      Alexa.getIntentName(handlerInput.requestEnvelope) ===
        "AMAZON.FallbackIntent"
    );
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder
      .speak(
        `I didn't understand that. You can say "tell me a story" or ask for a specific story by name.`
      )
      .reprompt("What would you like to do?")
      .getResponse();
  },
};

const SessionEndedRequestHandler = {
  canHandle(handlerInput) {
    return (
      Alexa.getRequestType(handlerInput.requestEnvelope) ===
      "SessionEndedRequest"
    );
  },
  handle(handlerInput) {
    // Cleanup logic if needed
    return handlerInput.responseBuilder.getResponse();
  },
};

// ----------------------------------------------------------
// Generic error handler
// ----------------------------------------------------------
const ErrorHandler = {
  canHandle() {
    return true;
  },
  handle(handlerInput, error) {
    console.log(`Error handled: ${error.message}`);
    return handlerInput.responseBuilder
      .speak("Oops, something went wrong. Try asking for a story again!")
      .reprompt("Try saying tell me a story.")
      .getResponse();
  },
};

// ----------------------------------------------------------
// Skill builder — order matters (first match wins)
// ----------------------------------------------------------
exports.handler = Alexa.SkillBuilders.custom()
  .addRequestHandlers(
    LaunchRequestHandler,
    SpecificStoryIntentHandler,
    RandomStoryIntentHandler,
    AnotherStoryIntentHandler,
    ListStoriesIntentHandler,
    YesIntentHandler,
    NoIntentHandler,
    HelpIntentHandler,
    StopIntentHandler,
    FallbackIntentHandler,
    SessionEndedRequestHandler
  )
  .addErrorHandlers(ErrorHandler)
  .lambda();
