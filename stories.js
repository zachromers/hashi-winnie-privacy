// ============================================================
// HASHI AND WINSTON STORIES
// ============================================================
// Each story needs:
//   id:    unique lowercase key (used internally)
//   title: the name Alexa says when announcing the story
//   names: array of phrases your daughter might say to request it
//   text:  the full story text Alexa reads aloud
//
// SSML tips for dramatic effect:
//   <break time="1s"/>              → half-second pause
//   <break time="1s"/>                 → one-second pause
//   <emphasis>word</emphasis>          → slight vocal stress
//   <prosody rate="slow">text</prosody> → slower speech
//
// Keep each story under ~450 words or Alexa may hit the
// response size limit on shorter timeout devices.
// ============================================================

const STORIES = [
  {
    id: "the-bath",
    title: "The Bath",
    names: ["the bath", "bath", "bath time", "bathtime", "bath story", "the bath story"],
    text: `Hashi heard a terrible sound. It was the water running in the bathtub.
<break time="600ms"/>
"Winston," said Hashi. "It is bath time."
<break time="600ms"/>
Winston's ears went flat. "I do not want a bath," he said.
<break time="600ms"/>
"Neither do I," said Hashi. "But we must hide."
<break time="1s"/>
They hid under the bed. They hid behind the curtains. They hid in the closet.
<break time="600ms"/>
mom and dad found them every time.
<break time="1s"/>
Winston got his bath first. He came out looking very sad and very wet.
<break time="600ms"/>
"How was it?" asked Hashi.
<break time="600ms"/>
"Terrible," said Winston. "But also, I smell like flowers now."
<break time="1s"/>
Then Hashi got his bath. He came out looking very annoyed and very wet.
<break time="600ms"/>
"I also smell like flowers," said Hashi.
<break time="1s"/>
They sat on the porch to dry in the sun.
<break time="600ms"/>
"You know," said Winston, "we do look very handsome."
<break time="600ms"/>
Hashi looked at his clean fur. "That is true," he said.
<break time="600ms"/>
"Same time next month?" asked Winston.
<break time="600ms"/>
"Do not remind me," said Hashi.
<break time="2s"/>
The end.`,
  },

  {
    id: "the-squirrel",
    title: "The Squirrel",
    names: ["the squirrel", "squirrel", "the squirrel story", "squirrel story"],
    text: `Winston saw a squirrel in the yard.
<break time="600ms"/>
"SQUIRREL!" shouted Winston.
<break time="600ms"/>
He ran as fast as he could. The squirrel ran up a tree.
<break time="1s"/>
Winston sat at the bottom of the tree. He waited.
<break time="600ms"/>
Hashi walked over. "What are you doing?" asked Hashi.
<break time="600ms"/>
"Waiting for the squirrel to come down," said Winston.
<break time="600ms"/>
"That could take a very long time," said Hashi.
<break time="600ms"/>
"I will wait," said Winston.
<break time="1s"/>
Hashi went inside. He took a nap. He ate his dinner. He looked out the window.
<break time="600ms"/>
Winston was still sitting under the tree.
<break time="1s"/>
The sun began to set. Hashi went outside.
<break time="600ms"/>
"Winston," he said. "The squirrel is not coming down."
<break time="600ms"/>
"I know," said Winston. "But I cannot leave now. I have been here too long."
<break time="1s"/>
Hashi sat down next to Winston.
<break time="600ms"/>
"Then I will wait with you," said Hashi.
<break time="1s"/>
They waited together until it was dark. The squirrel did not come down.
<break time="600ms"/>
"Maybe tomorrow," said Winston.
<break time="600ms"/>
"Maybe," said Hashi.
<break time="600ms"/>
They went inside for dinner.
<break time="2s"/>
The end.`,
  },

  {
    id: "the-treat",
    title: "The Treat",
    names: ["the treat", "treat", "treat story", "the treat story", "sharing"],
    text: `mom and dad left a treat on the counter. It was one treat. There were two of them.
<break time="1s"/>
Winston looked at the treat. Hashi looked at the treat.
<break time="600ms"/>
"You can have it," said Winston.
<break time="600ms"/>
"No, you can have it," said Hashi.
<break time="600ms"/>
"I insist," said Winston.
<break time="600ms"/>
"I insist more," said Hashi.
<break time="1s"/>
They sat and looked at the treat for a long time.
<break time="600ms"/>
"This is silly," said Hashi. "We will share it."
<break time="600ms"/>
"But how?" asked Winston. "It is only one treat."
<break time="600ms"/>
Hashi thought about this. "I will eat the left half," he said. "You will eat the right half."
<break time="1s"/>
They very carefully ate the treat together. Their noses touched in the middle.
<break time="1s"/>
"That was a good treat," said Winston.
<break time="600ms"/>
"It was better because we shared it," said Hashi.
<break time="600ms"/>
"Everything is better when we share it," said Winston.
<break time="1s"/>
Hashi did not say anything. But he wagged his tail, just a little.
<break time="2s"/>
The end.`,
  },

  {
    id: "the-thunder",
    title: "The Thunder",
    names: ["the thunder", "thunder", "thunder story", "the thunder story", "storm", "the storm"],
    text: `There was a loud noise outside. Then another.
<break time="1s"/>
Winston was shaking under the blanket.
<break time="600ms"/>
"It is only thunder," said Hashi.
<break time="600ms"/>
"I know," said Winston. "But it is very loud thunder."
<break time="1s"/>
There was another boom. Winston whimpered.
<break time="1s"/>
Hashi crawled under the blanket too.
<break time="600ms"/>
"You are scared also?" asked Winston.
<break time="600ms"/>
"No," said Hashi. "I am just keeping you company."
<break time="1s"/>
There was a flash of lightning. Hashi moved a little closer to Winston.
<break time="600ms"/>
"Thank you for keeping me company," said Winston.
<break time="600ms"/>
"You are welcome," said Hashi.
<break time="1s"/>
They stayed under the blanket until the storm passed. When it was quiet, Hashi came out first.
<break time="600ms"/>
"The storm is over," said Hashi.
<break time="600ms"/>
Winston came out too. "Hashi," he said, "you were shaking."
<break time="600ms"/>
"I was cold," said Hashi.
<break time="600ms"/>
"Of course," said Winston.
<break time="600ms"/>
He did not say anything else about it. That is what friends do.
<break time="2s"/>
The end.`,
  },

  {
    id: "the-new-dog",
    title: "The New Dog",
    names: ["the new dog", "new dog", "chester", "the new dog story", "new friend"],
    text: `A new dog moved in next door. His name was Chester.
<break time="600ms"/>
"Let's go say hello!" said Winston.
<break time="600ms"/>
"I do not know," said Hashi. "He might not be friendly."
<break time="1s"/>
Winston ran to the fence. "Hello! I am Winston! Do you want to be friends?"
<break time="600ms"/>
Chester wagged his tail. "Yes!" he said.
<break time="1s"/>
They ran along the fence together. They barked happy barks.
<break time="600ms"/>
Hashi watched from the porch.
<break time="1s"/>
Later, Winston came back. "Chester is very nice," said Winston. "You should meet him."
<break time="600ms"/>
"Maybe later," said Hashi.
<break time="600ms"/>
Winston tilted his head. "Are you jealous, Hashi?"
<break time="600ms"/>
"No," said Hashi. "I just do not need new friends."
<break time="1s"/>
Winston sat down next to Hashi. "Chester is a new friend," said Winston. "But you are my best friend. That is different."
<break time="600ms"/>
Hashi's ears went up a little. "Really?" he asked.
<break time="600ms"/>
"Of course," said Winston. "You are my Hashi."
<break time="1s"/>
The next day, Hashi went to the fence. "Hello," he said to Chester. "I am Hashi."
<break time="600ms"/>
Chester wagged his tail. And Hashi decided that new friends were not so bad after all.
<break time="2s"/>
The end.`,
  },

  {
    id: "the-vet",
    title: "The Vet",
    names: ["the vet", "vet", "vet story", "the vet story", "doctor"],
    text: `"I do not want to go," said Hashi.
<break time="600ms"/>
"Neither do I," said Winston.
<break time="600ms"/>
But mom and dad put them in the car anyway.
<break time="1s"/>
At the vet, there were many smells. Some were interesting. Some were not.
<break time="1s"/>
Hashi went in first. Winston waited.
<break time="600ms"/>
When Hashi came out, he looked very dignified. "It was not so bad," he said.
<break time="1s"/>
Then Winston went in. There was a lot of noise. There was some howling.
<break time="1s"/>
When Winston came out, he did not look dignified at all.
<break time="600ms"/>
"What happened?" asked Hashi.
<break time="600ms"/>
"They looked at my ears," said Winston.
<break time="600ms"/>
"That is all?"
<break time="600ms"/>
"I do not like when people look at my ears," said Winston.
<break time="1s"/>
On the car ride home, Hashi sat close to Winston.
<break time="600ms"/>
"You were very brave," said Hashi.
<break time="600ms"/>
"I was not brave at all," said Winston.
<break time="600ms"/>
"You went in," said Hashi. "That is brave enough."
<break time="600ms"/>
Winston felt a little better.
<break time="2s"/>
The end.`,
  },

  {
    id: "the-snow",
    title: "The Snow",
    names: ["the snow", "snow", "snow story", "the snow story"],
    text: `Winston woke up and looked outside. Everything was white.
<break time="600ms"/>
"Hashi!" he shouted. "SNOW!"
<break time="600ms"/>
Hashi opened one eye. "Snow is cold," he said.
<break time="600ms"/>
"Snow is wonderful!" said Winston.
<break time="1s"/>
He ran outside and jumped in the snow. He rolled in the snow. He ate the snow.
<break time="1s"/>
Hashi stood on the porch. He put one paw in the snow. He took it out immediately.
<break time="600ms"/>
"No, thank you," said Hashi.
<break time="600ms"/>
"But Hashi, look!" said Winston.
<break time="600ms"/>
He stuck his whole head in the snow. When he came up, he had snow on his face. He looked like he had a white beard.
<break time="1s"/>
Hashi laughed. He had never laughed at snow before.
<break time="1s"/>
He stepped off the porch, very carefully. The snow came up to his belly.
<break time="600ms"/>
"This is cold," said Hashi.
<break time="600ms"/>
"But it is fun," said Winston.
<break time="1s"/>
Hashi took another step. Then another. He was not sure if it was fun.
<break time="600ms"/>
But Winston was happy. And that made Hashi a little happy too.
<break time="1s"/>
They stayed outside until their paws were frozen. Then they went inside and sat by the fire.
<break time="600ms"/>
"That was fun," said Hashi.
<break time="600ms"/>
"I knew you would like it," said Winston.
<break time="2s"/>
The end.`,
  },

  {
    id: "the-waiting",
    title: "The Waiting",
    names: ["the waiting", "waiting", "waiting story", "the waiting story", "owners leaving"],
    text: `mom and dad were leaving.
<break time="600ms"/>
"Be good," they said. "We will be back soon."
<break time="1s"/>
The door closed.
<break time="1s"/>
Winston sat by the door. "I will wait here," he said.
<break time="600ms"/>
Hashi went to his bed. "They will be gone for hours," he said. "You should rest."
<break time="600ms"/>
"I cannot rest," said Winston. "What if they come back and I am not here?"
<break time="1s"/>
One hour passed. Winston was still by the door.
<break time="600ms"/>
Two hours passed. Winston was still by the door.
<break time="1s"/>
Hashi brought his blanket over. He put it next to Winston. He lay down.
<break time="600ms"/>
"What are you doing?" asked Winston.
<break time="600ms"/>
"Waiting with you," said Hashi.
<break time="600ms"/>
"But you said to rest."
<break time="600ms"/>
"I can rest here," said Hashi.
<break time="1s"/>
They waited together. Hashi fell asleep. Winston watched the door.
<break time="1s"/>
When mom and dad came home, Winston barked with joy. Hashi woke up and wagged his tail.
<break time="600ms"/>
"See?" said Hashi. "They came back."
<break time="600ms"/>
"They always come back," said Winston.
<break time="1s"/>
But the next time mom and dad left, Winston still waited by the door. And Hashi still waited with him.
<break time="2s"/>
The end.`,
  },

  {
    id: "the-dream",
    title: "The Dream",
    names: ["the dream", "dream", "dream story", "the dream story", "dreaming"],
    text: `Hashi woke up in the middle of the night. Winston was making noises. His legs were moving.
<break time="600ms"/>
"Winston," said Hashi. "Wake up."
<break time="1s"/>
Winston opened his eyes. "Oh," he said. "I was dreaming."
<break time="600ms"/>
"What were you dreaming about?" asked Hashi.
<break time="600ms"/>
"I was running in a big field," said Winston. "There were a hundred tennis balls. And a hundred squirrels. And you were there too."
<break time="600ms"/>
"What was I doing?" asked Hashi.
<break time="600ms"/>
"You were running with me," said Winston. "You were very fast. Faster than the squirrels, even."
<break time="1s"/>
Hashi thought about this. "That sounds like a good dream," he said.
<break time="600ms"/>
"It was," said Winston. "Do you dream, Hashi?"
<break time="600ms"/>
"Sometimes," said Hashi.
<break time="600ms"/>
"What do you dream about?"
<break time="1s"/>
Hashi was quiet for a moment. "Warm spots in the sun," he said. "And treats that never run out. And you are always there, being very quiet."
<break time="600ms"/>
Winston laughed. "I am never quiet," he said.
<break time="600ms"/>
"That is why it is a dream," said Hashi.
<break time="1s"/>
They both went back to sleep. And they both had good dreams.
<break time="2s"/>
The end.`,
  },

  {
    id: "the-porch",
    title: "The Porch",
    names: ["the porch", "porch", "porch story", "the porch story", "always friends"],
    text: `It was a warm evening. Winston and Hashi sat on the porch.
<break time="1s"/>
They did not say anything for a long time.
<break time="1s"/>
A bird flew by. They watched it.
<break time="600ms"/>
A car drove past. They watched it too.
<break time="1s"/>
"Hashi," said Winston.
<break time="600ms"/>
"Yes?" said Hashi.
<break time="600ms"/>
"Do you think we will always be friends?"
<break time="1s"/>
Hashi looked at Winston. "What kind of question is that?"
<break time="600ms"/>
"I don't know," said Winston. "I was just thinking."
<break time="1s"/>
Hashi looked out at the yard. The sun was setting. The sky was orange and pink.
<break time="600ms"/>
"Yes," said Hashi. "I think we will always be friends."
<break time="600ms"/>
"How do you know?" asked Winston.
<break time="600ms"/>
"Because," said Hashi, "I cannot imagine it any other way."
<break time="1s"/>
Winston's tail wagged slowly. "That is a good answer," he said.
<break time="600ms"/>
"I know," said Hashi.
<break time="1s"/>
They sat on the porch until the stars came out. They did not say anything else. They did not need to.
<break time="600ms"/>
Some friends are like that.
<break time="2s"/>
The end.`,
  },

  {
    id: "the-garage",
    title: "The Garage",
    names: ["the garage", "garage", "garage story", "the garage story", "in trouble"],
    text: `Winston was running around the house. He was very excited.
<break time="600ms"/>
"Slow down, Winston!" said mom and dad.
<break time="600ms"/>
But Winston ran faster. He knocked over a lamp.
<break time="600ms"/>
"Winston!" said mom and dad.
<break time="1s"/>
Hashi was sitting quietly in the corner. He looked at Winston. He looked at the lamp.
<break time="1s"/>
Winston jumped on the sofa. He jumped off the sofa. He ran in circles.
<break time="600ms"/>
"That's it," said mom and dad. "Both of you, to the garage!"
<break time="600ms"/>
"But I didn't do anything," said Hashi.
<break time="600ms"/>
mom and dad did not listen. They put Winston and Hashi in the garage. They closed the door.
<break time="1s"/>
Hashi sat down in the corner of the garage. He did not look at Winston.
<break time="600ms"/>
Winston wagged his tail. "This is a nice garage," he said.
<break time="600ms"/>
Hashi said nothing.
<break time="600ms"/>
"There are boxes to smell," said Winston. "And tools to look at."
<break time="600ms"/>
Hashi still said nothing.
<break time="1s"/>
Winston sat down next to Hashi. "Are you angry?" he asked.
<break time="600ms"/>
"Yes," said Hashi. "I am always in the garage because of you. I was being good. But we both get punished anyway."
<break time="1s"/>
Winston's tail stopped wagging. "I am sorry, Hashi," he said. "I just get so excited. I cannot help it."
<break time="600ms"/>
"You could try to help it," said Hashi.
<break time="600ms"/>
Winston thought about this. "You are right," he said. "I will try."
<break time="1s"/>
They sat quietly in the garage.
<break time="1s"/>
After a while, Hashi said, "There is a spider web in that corner. It is very interesting."
<break time="600ms"/>
Winston looked at the spider web. "It is," he said quietly.
<break time="1s"/>
They watched the spider web together. They did not run around. They did not knock anything over.
<break time="1s"/>
Soon mom and dad opened the door. "You can come out now," they said.
<break time="1s"/>
Winston and Hashi walked out slowly. Winston did not run. He stayed right next to Hashi.
<break time="600ms"/>
"Thank you for trying," said Hashi.
<break time="600ms"/>
"You are a good friend," said Winston.
<break time="1s"/>
And they both went to lie down in the sun, very quietly, together.
<break time="2s"/>
The end.`,
  },

  {
    id: "the-walk",
    title: "The Walk",
    names: ["the walk", "walk", "walk story", "the walk story", "going for a walk"],
    text: `mom and dad picked up the leash.
<break time="600ms"/>
Winston began to spin in circles. "Walk! Walk! Walk!" he shouted.
<break time="600ms"/>
Hashi watched from the couch. "I will stay here," he said.
<break time="600ms"/>
"But Hashi," said Winston, "the outside is out there."
<break time="600ms"/>
"I am aware," said Hashi.
<break time="1s"/>
mom and dad clipped the leash to Winston's collar. Winston ran to the door. He ran back. He ran to the door again.
<break time="600ms"/>
"Are you sure you will not come?" asked Winston.
<break time="600ms"/>
"I am sure," said Hashi.
<break time="1s"/>
They left. Hashi stretched out on the couch. He closed his eyes.
<break time="600ms"/>
It was very quiet.
<break time="600ms"/>
He opened one eye. He looked at the door.
<break time="600ms"/>
He closed his eye again.
<break time="1s"/>
When Winston came back, he smelled like grass and mud and very good things.
<break time="600ms"/>
"Hashi," said Winston, "I saw a rabbit. And a pinecone. And a man with a hat."
<break time="600ms"/>
"Very exciting," said Hashi.
<break time="600ms"/>
"Next time you should come," said Winston.
<break time="1s"/>
Hashi looked at Winston. He looked at the door. He looked at the couch.
<break time="600ms"/>
"Perhaps," said Hashi.
<break time="600ms"/>
Winston wagged his tail. He knew what perhaps meant.
<break time="2s"/>
The end.`,
  },

  {
    id: "the-bubble",
    title: "The Bubble",
    names: ["the bubble", "bubble", "bubbles", "bubble story", "the bubble story"],
    text: `mom and dad brought out a small bottle. They blew into it.
<break time="600ms"/>
Bubbles floated into the air.
<break time="1s"/>
Winston's eyes went wide. "What are those?" he whispered.
<break time="600ms"/>
"Bubbles," said Hashi. He was watching from the step.
<break time="600ms"/>
"Are they alive?" asked Winston.
<break time="600ms"/>
"No," said Hashi.
<break time="1s"/>
Winston snapped at one. It popped. He looked very surprised.
<break time="600ms"/>
"It disappeared," said Winston.
<break time="600ms"/>
"That is what bubbles do," said Hashi.
<break time="1s"/>
Winston snapped at another. Pop. And another. Pop.
<break time="600ms"/>
He began to bark at them. He jumped. He spun. He ran through the cloud of bubbles.
<break time="600ms"/>
"Winston," said Hashi, "you cannot catch them all."
<break time="600ms"/>
"I can try!" said Winston.
<break time="1s"/>
He tried very hard. He did not catch them all. But he caught many.
<break time="1s"/>
Hashi came down from the step. He walked to where one bubble was floating, very slowly, just above the ground.
<break time="600ms"/>
He tapped it gently with his paw.
<break time="600ms"/>
Pop.
<break time="600ms"/>
"You popped one," said Winston.
<break time="600ms"/>
"I was simply testing it," said Hashi.
<break time="600ms"/>
"Of course," said Winston.
<break time="1s"/>
mom and dad blew more bubbles. They all floated up into the sky.
<break time="600ms"/>
Hashi and Winston watched them go.
<break time="600ms"/>
"Where do they go?" asked Winston.
<break time="600ms"/>
"Away," said Hashi.
<break time="600ms"/>
That seemed like enough of an answer.
<break time="2s"/>
The end.`,
  },

  {
    id: "the-ball",
    title: "The Ball",
    names: ["the ball", "ball", "ball story", "the ball story", "red ball"],
    text: `Winston had a ball. It was his favorite ball. It was red and a little chewed and it was perfect.
<break time="600ms"/>
He carried it everywhere.
<break time="1s"/>
"Winston," said Hashi, "you have been carrying that ball for three hours."
<break time="600ms"/>
"I know," said Winston. "It is my ball."
<break time="600ms"/>
"You are not playing with it," said Hashi. "You are just carrying it."
<break time="600ms"/>
"I am keeping it safe," said Winston.
<break time="1s"/>
Hashi looked at the ball. "May I see it?" he asked.
<break time="600ms"/>
Winston set it down carefully. Hashi sniffed it.
<break time="600ms"/>
"It smells like you," said Hashi.
<break time="600ms"/>
"That is because it is mine," said Winston.
<break time="1s"/>
Hashi batted the ball gently with his paw. It rolled a little.
<break time="600ms"/>
"Do not lose it," said Winston.
<break time="600ms"/>
"I will not lose it," said Hashi. He batted it again.
<break time="600ms"/>
The ball rolled under the couch.
<break time="1s"/>
They both looked at the couch.
<break time="1s"/>
"I will get it," said Winston. He got on the floor and pushed his nose under the couch. He could not reach.
<break time="600ms"/>
"I will get it," said Hashi. He reached under with one paw. He pulled the ball out.
<break time="600ms"/>
He set it in front of Winston.
<break time="600ms"/>
"Thank you," said Winston.
<break time="600ms"/>
"You are welcome," said Hashi.
<break time="1s"/>
Winston picked up the ball and carried it to his bed. He kept it there for the rest of the day.
<break time="2s"/>
The end.`,
  },

  {
    id: "the-lost-toy",
    title: "The Lost Toy",
    names: ["the lost toy", "lost toy", "mr elephant", "the lost toy story", "missing toy"],
    text: `Winston was looking for something.
<break time="600ms"/>
He looked under the couch. He looked behind the door. He looked in all of his usual places.
<break time="1s"/>
"What are you looking for?" asked Hashi.
<break time="600ms"/>
"Mr. Elephant," said Winston.
<break time="600ms"/>
Mr. Elephant was Winston's stuffed elephant. It was gray and had one eye and Winston loved it very much.
<break time="1s"/>
"When did you last have it?" asked Hashi.
<break time="600ms"/>
"This morning," said Winston. "I had it this morning."
<break time="1s"/>
Hashi thought about this. "What did you do this morning?" he asked.
<break time="600ms"/>
"I woke up," said Winston. "I ate breakfast. I looked out the window. I ran around the yard."
<break time="600ms"/>
"Did you take Mr. Elephant to the yard?" asked Hashi.
<break time="1s"/>
Winston stopped. "Maybe," he said.
<break time="1s"/>
They went outside. They looked near the fence. They looked by the garden. They looked near the big rock.
<break time="600ms"/>
Mr. Elephant was under the bush.
<break time="600ms"/>
"He was outside!" said Winston. He picked up Mr. Elephant and shook it happily.
<break time="600ms"/>
"He must have been cold," said Hashi.
<break time="600ms"/>
"Oh no," said Winston. He held Mr. Elephant very close.
<break time="600ms"/>
"He is probably fine," said Hashi.
<break time="600ms"/>
"He is fine now," said Winston. "I found him."
<break time="1s"/>
He carried Mr. Elephant inside and put him on the bed.
<break time="600ms"/>
"Thank you for helping," said Winston.
<break time="600ms"/>
"Next time," said Hashi, "do not take Mr. Elephant outside."
<break time="600ms"/>
"Yes," said Winston. "That is a good rule."
<break time="2s"/>
The end.`,
  },

  {
    id: "the-new-bed",
    title: "The New Bed",
    names: ["the new bed", "new bed", "bed story", "the new bed story", "winston's bed"],
    text: `mom and dad brought home a new bed. It was very large and very soft and it had a pillow on it.
<break time="600ms"/>
It was for Winston.
<break time="1s"/>
Winston looked at the bed. He walked around it. He sniffed it.
<break time="600ms"/>
"It is new," he said.
<break time="600ms"/>
"Yes," said Hashi.
<break time="600ms"/>
"I am not sure about new things," said Winston.
<break time="600ms"/>
"It is a bed," said Hashi. "You sleep on it."
<break time="600ms"/>
"My old bed was very good," said Winston.
<break time="600ms"/>
"Your old bed had a hole in it," said Hashi.
<break time="600ms"/>
"I liked that hole," said Winston.
<break time="1s"/>
Hashi looked at the new bed. It did look very soft. He walked over and pressed one paw into it.
<break time="600ms"/>
"That is my bed," said Winston.
<break time="600ms"/>
"I am testing it for you," said Hashi.
<break time="600ms"/>
He pressed the other paw in. He turned around once. He lay down.
<break time="600ms"/>
"Hashi," said Winston.
<break time="600ms"/>
"It is very comfortable," said Hashi. He did not move.
<break time="600ms"/>
"That is my bed," said Winston again.
<break time="600ms"/>
"You said you did not want it," said Hashi.
<break time="600ms"/>
"I did not say that," said Winston. "I said I was not sure."
<break time="1s"/>
Hashi got up. He stepped aside. Winston climbed into the new bed. He turned around three times. He lay down.
<break time="600ms"/>
"Well?" asked Hashi.
<break time="600ms"/>
Winston sighed a very happy sigh. "It is perfect," he said.
<break time="600ms"/>
"I thought so," said Hashi.
<break time="2s"/>
The end.`,
  },

  {
    id: "the-hiccups",
    title: "The Hiccups",
    names: ["the hiccups", "hiccups", "hiccup story", "the hiccup story", "winston hiccups"],
    text: `Winston had the hiccups.
<break time="600ms"/>
Hic.
<break time="600ms"/>
He looked very surprised each time.
<break time="600ms"/>
Hic.
<break time="1s"/>
"Make them stop," said Winston.
<break time="600ms"/>
"How?" asked Hashi.
<break time="600ms"/>
"I do not know," said Winston. "You are clever. Think of something."
<break time="600ms"/>
Hic.
<break time="1s"/>
Hashi thought about it. "Hold your breath," he said.
<break time="600ms"/>
Winston held his breath. His face got very serious.
<break time="600ms"/>
Hic.
<break time="600ms"/>
"That did not work," said Winston.
<break time="600ms"/>
"Drink some water," said Hashi.
<break time="600ms"/>
Winston went to his bowl and drank a lot of water.
<break time="600ms"/>
Hic.
<break time="600ms"/>
"That did not work either," said Winston.
<break time="1s"/>
Hashi thought harder. "I will scare you," he said.
<break time="600ms"/>
"That will not work," said Winston.
<break time="600ms"/>
"Let me try," said Hashi.
<break time="600ms"/>
He waited until Winston was looking the other way.
<break time="600ms"/>
"BOO," said Hashi.
<break time="600ms"/>
Hic.
<break time="600ms"/>
"See?" said Winston.
<break time="600ms"/>
"I did not do it very well," said Hashi. "Let me try again."
<break time="600ms"/>
"Please do not," said Winston.
<break time="600ms"/>
Hic.
<break time="1s"/>
They sat quietly for a while.
<break time="600ms"/>
Then Winston yawned a very long yawn.
<break time="600ms"/>
And the hiccups stopped.
<break time="1s"/>
"How did that work?" asked Winston.
<break time="600ms"/>
"I have no idea," said Hashi.
<break time="600ms"/>
"Thank you anyway," said Winston.
<break time="600ms"/>
"I did not do anything," said Hashi.
<break time="600ms"/>
"You tried," said Winston. "That counts."
<break time="2s"/>
The end.`,
  },

  {
    id: "the-visitors",
    title: "The Visitors",
    names: ["the visitors", "visitors", "visitor story", "the visitor story", "company"],
    text: `There was a knock at the door.
<break time="600ms"/>
Winston ran to the door. He barked. He spun around. He barked again.
<break time="600ms"/>
"Visitors!" he shouted.
<break time="600ms"/>
"Yes," said Hashi. He walked slowly to the hallway and sat down.
<break time="1s"/>
mom and dad opened the door. In came people. Several of them. They were loud and cheerful.
<break time="600ms"/>
Winston immediately put his head in the nearest bag.
<break time="600ms"/>
"Winston!" said mom and dad.
<break time="600ms"/>
He did not stop.
<break time="1s"/>
Hashi sat very still and waited.
<break time="1s"/>
The visitors sat on the couch. Winston jumped up immediately and sat on a visitor's lap. The visitor was surprised. Winston did not notice.
<break time="1s"/>
Hashi sat by the door to the hallway. He was not on the couch. He was not in any bags.
<break time="600ms"/>
A visitor noticed Hashi. "Oh," she said. "What a beautiful cat."
<break time="600ms"/>
Hashi blinked slowly.
<break time="600ms"/>
She reached out her hand. Hashi sniffed it. He allowed her to scratch his ear. Just the one ear.
<break time="1s"/>
After a long time the visitors left. Winston was exhausted and happy.
<break time="600ms"/>
"That was wonderful," said Winston.
<break time="600ms"/>
"It was very loud," said Hashi.
<break time="600ms"/>
"Did you like the visitors?" asked Winston.
<break time="600ms"/>
"The one on the end was acceptable," said Hashi.
<break time="600ms"/>
"High praise," said Winston.
<break time="600ms"/>
"Yes," said Hashi. "It is."
<break time="2s"/>
The end.`,
  },

  {
    id: "the-puddle",
    title: "The Puddle",
    names: ["the puddle", "puddle", "puddle story", "the puddle story", "mud puddle"],
    text: `It had rained.
<break time="600ms"/>
There was a large puddle at the bottom of the yard. It was very brown and very wide.
<break time="1s"/>
Winston saw the puddle.
<break time="600ms"/>
"Hashi," said Winston, "there is a puddle."
<break time="600ms"/>
"I see it," said Hashi.
<break time="600ms"/>
"I am going to jump in it," said Winston.
<break time="600ms"/>
"I know you are," said Hashi.
<break time="1s"/>
Winston jumped in the puddle. Water flew everywhere. He jumped again. More water. He ran through it. He sat in it.
<break time="600ms"/>
He looked like a completely different dog.
<break time="1s"/>
"How is it?" asked Hashi from the dry part of the yard.
<break time="600ms"/>
"Amazing," said Winston. "Come in."
<break time="600ms"/>
"No," said Hashi.
<break time="600ms"/>
"Just one paw," said Winston.
<break time="600ms"/>
"No thank you," said Hashi.
<break time="1s"/>
Winston shook himself. A great wave of muddy water flew through the air.
<break time="600ms"/>
It landed on Hashi.
<break time="1s"/>
There was a long silence.
<break time="1s"/>
"I am sorry," said Winston.
<break time="1s"/>
Hashi looked down at his muddy paws. He looked at his muddy belly. He looked at his muddy tail.
<break time="600ms"/>
He walked to the puddle and stepped in with all four paws.
<break time="600ms"/>
"You are already dirty," said Winston helpfully.
<break time="600ms"/>
"I noticed," said Hashi.
<break time="1s"/>
They stood in the puddle together.
<break time="600ms"/>
"See?" said Winston. "It is amazing."
<break time="600ms"/>
Hashi did not say it was amazing. But he did not get out right away either.
<break time="2s"/>
The end.`,
  },

  {
    id: "the-bird",
    title: "The Bird",
    names: ["the bird", "bird", "bird story", "the bird story", "watching the bird"],
    text: `A bird landed on the fence.
<break time="600ms"/>
Hashi was in the window. He went very still.
<break time="600ms"/>
His tail moved slowly. His eyes got very wide.
<break time="1s"/>
"What are you doing?" asked Winston.
<break time="600ms"/>
"Shhhh," said Hashi.
<break time="600ms"/>
"Is that a bird?" said Winston.
<break time="600ms"/>
"Shhhhh," said Hashi.
<break time="600ms"/>
"I see it," said Winston. He pressed his nose against the glass.
<break time="1s"/>
The bird turned its head.
<break time="600ms"/>
"Do not breathe," said Hashi.
<break time="600ms"/>
"I have to breathe," said Winston.
<break time="1s"/>
Hashi did not look away from the bird. It was small and brown and very interesting.
<break time="1s"/>
"What kind is it?" asked Winston. "Do you know? Is it a finch? I think it is a finch. Or possibly a sparrow. Do you know the difference between a finch and a—"
<break time="1s"/>
The bird flew away.
<break time="1s"/>
Hashi looked at Winston.
<break time="600ms"/>
Winston looked back. "I did not scare it," he said.
<break time="600ms"/>
"You talked it away," said Hashi.
<break time="600ms"/>
"That is the same as scaring it," said Winston.
<break time="600ms"/>
"It is worse," said Hashi.
<break time="1s"/>
Winston pressed his nose to the glass again. He looked at the empty fence.
<break time="600ms"/>
"Sorry, Hashi," he said.
<break time="1s"/>
Hashi settled back into the window. "It will come back," he said. "They always do."
<break time="600ms"/>
"I will be quieter next time," said Winston.
<break time="600ms"/>
"That would help," said Hashi.
<break time="2s"/>
The end.`,
  },

  {
    id: "the-hat",
    title: "The Hat",
    names: ["the hat", "hat", "hat story", "the hat story", "winston's hat"],
    text: `mom and dad had a hat. It was a big hat. It sat on the hook by the door.
<break time="600ms"/>
One day it fell off the hook.
<break time="1s"/>
Winston sniffed it. "What is this?" he said.
<break time="600ms"/>
"A hat," said Hashi.
<break time="600ms"/>
"It smells strange," said Winston.
<break time="600ms"/>
"It smells like mom and dad," said Hashi.
<break time="1s"/>
Winston picked it up in his mouth and carried it to the middle of the room. He set it down and looked at it.
<break time="600ms"/>
Then he put it on his head.
<break time="600ms"/>
It was much too big. It covered his whole face.
<break time="1s"/>
"Winston," said Hashi, "you have a hat on your face."
<break time="600ms"/>
"I know," said Winston. He walked forward. He walked into the wall.
<break time="600ms"/>
"That is the wall," said Hashi.
<break time="600ms"/>
"I know," said Winston.
<break time="600ms"/>
He turned around. He walked into the other wall.
<break time="600ms"/>
"That is also a wall," said Hashi.
<break time="1s"/>
Hashi picked the hat up with his teeth and set it on the floor. Winston blinked in the light.
<break time="600ms"/>
"Thank you," said Winston.
<break time="600ms"/>
"You are welcome," said Hashi.
<break time="1s"/>
Winston looked at the hat. "I think I looked very distinguished," he said.
<break time="600ms"/>
"You walked into two walls," said Hashi.
<break time="600ms"/>
"Distinguished people walk into walls," said Winston.
<break time="600ms"/>
Hashi thought about this. "No," he said. "They do not."
<break time="1s"/>
They put the hat back on the hook.
<break time="2s"/>
The end.`,
  },

  {
    id: "the-mud",
    title: "The Mud",
    names: ["the mud", "mud", "mud story", "the mud story", "muddy winston"],
    text: `Winston came inside covered in mud.
<break time="600ms"/>
He tracked it across the kitchen. Then the hallway. Then the living room rug.
<break time="1s"/>
Hashi watched from the couch.
<break time="600ms"/>
"Winston," said Hashi.
<break time="600ms"/>
"Yes?" said Winston.
<break time="600ms"/>
"You are covered in mud."
<break time="600ms"/>
"Yes," said Winston happily.
<break time="600ms"/>
"You are getting mud on the rug," said Hashi.
<break time="600ms"/>
"Yes," said Winston.
<break time="600ms"/>
"mom and dad will not like that," said Hashi.
<break time="1s"/>
Winston stopped. He looked at his paws. He looked at the rug.
<break time="600ms"/>
"Oh," said Winston.
<break time="1s"/>
They heard mom and dad coming toward the kitchen.
<break time="600ms"/>
"Oh no," said Winston.
<break time="600ms"/>
"Do not look at me," said Hashi.
<break time="1s"/>
mom and dad came in. They saw the mud. They saw Winston. They looked at the rug.
<break time="600ms"/>
"Winston," said mom and dad.
<break time="600ms"/>
Winston wagged his tail very slowly.
<break time="1s"/>
He got a bath. It was quick and it was cold and he did not enjoy it at all.
<break time="1s"/>
Afterward he came to sit next to Hashi. He smelled clean.
<break time="600ms"/>
"I should have stayed on the porch," said Winston.
<break time="600ms"/>
"Yes," said Hashi.
<break time="600ms"/>
"You could have told me," said Winston.
<break time="600ms"/>
"I did tell you," said Hashi.
<break time="600ms"/>
"You told me after," said Winston.
<break time="600ms"/>
Hashi looked at him. "I told you during," said Hashi.
<break time="600ms"/>
Winston thought about this. "Next time tell me before," he said.
<break time="600ms"/>
"I will try," said Hashi.
<break time="2s"/>
The end.`,
  },

  {
    id: "the-car-ride",
    title: "The Car Ride",
    names: ["the car ride", "car ride", "car story", "the car ride story", "in the car"],
    text: `mom and dad opened the car door.
<break time="600ms"/>
"Car ride!" shouted Winston. He jumped in immediately.
<break time="600ms"/>
Hashi sat on the porch. "Where are we going?" he asked.
<break time="600ms"/>
"I do not know," said Winston. "But it is a car ride."
<break time="600ms"/>
"That is not useful information," said Hashi.
<break time="600ms"/>
"Does it matter?" said Winston. "It is a car ride!"
<break time="1s"/>
Hashi got in the car. He found a corner and sat in it.
<break time="1s"/>
The car started moving.
<break time="600ms"/>
Winston put his head out the window. His ears flew back. His tongue came out.
<break time="600ms"/>
"Winston, close the window," said Hashi.
<break time="600ms"/>
"But the wind!" said Winston.
<break time="600ms"/>
"My fur," said Hashi.
<break time="600ms"/>
Winston closed the window halfway.
<break time="1s"/>
They rode for a long time. They passed houses. They passed a park. They passed a store.
<break time="600ms"/>
"I think we are going to the park," said Winston.
<break time="600ms"/>
They passed the park.
<break time="600ms"/>
"I think we are going to the store," said Winston.
<break time="600ms"/>
They passed the store.
<break time="1s"/>
They stopped in front of a house Hashi did not recognize.
<break time="600ms"/>
"Where are we?" asked Winston.
<break time="600ms"/>
Hashi had no idea.
<break time="1s"/>
mom and dad got out and visited someone inside for a long time. Hashi and Winston waited in the car.
<break time="600ms"/>
"This is the worst car ride," said Winston.
<break time="600ms"/>
"It is fine," said Hashi.
<break time="600ms"/>
"We did not go anywhere good," said Winston.
<break time="600ms"/>
"We went somewhere together," said Hashi. "That is something."
<break time="600ms"/>
Winston thought about that. "That is something," he agreed.
<break time="2s"/>
The end.`,
  },

  {
    id: "the-photograph",
    title: "The Photograph",
    names: ["the photograph", "photograph", "photo", "photo story", "the photo story", "picture"],
    text: `mom and dad got out the camera.
<break time="600ms"/>
"Oh no," said Hashi.
<break time="600ms"/>
"Photograph time!" said Winston.
<break time="600ms"/>
"I do not like photograph time," said Hashi.
<break time="600ms"/>
"You never like photograph time," said Winston. "But the photographs always come out nice."
<break time="1s"/>
mom and dad arranged them on the couch. Hashi was placed on one side. Winston was placed on the other.
<break time="600ms"/>
"Closer together," said mom and dad.
<break time="600ms"/>
They moved closer.
<break time="600ms"/>
"Even closer," said mom and dad.
<break time="600ms"/>
They were now quite close.
<break time="1s"/>
Winston put his paw over Hashi's shoulder.
<break time="600ms"/>
"Winston," said Hashi.
<break time="600ms"/>
"Just for the photograph," said Winston.
<break time="1s"/>
Hashi looked at the camera. He tried to look dignified.
<break time="600ms"/>
Winston smiled a very big smile.
<break time="1s"/>
mom and dad took many photographs. Each time they looked at the camera and did not move.
<break time="600ms"/>
Except when Winston licked Hashi's ear.
<break time="600ms"/>
"Winston," said Hashi.
<break time="600ms"/>
"Sorry," said Winston. "It was an accident."
<break time="600ms"/>
"It was not an accident," said Hashi.
<break time="600ms"/>
"It was mostly an accident," said Winston.
<break time="1s"/>
When it was over, Hashi went to look out the window and pretend that nothing had happened.
<break time="600ms"/>
Winston looked at the photographs on the camera screen.
<break time="600ms"/>
"Hashi," he said, "come look. You look very handsome."
<break time="600ms"/>
Hashi looked at the photograph. They both looked happy in it.
<break time="600ms"/>
"So do you," said Hashi. And he walked away before Winston could see him smile.
<break time="2s"/>
The end.`,
  },

  {
    id: "the-sunbeam",
    title: "The Sunbeam",
    names: ["the sunbeam", "sunbeam", "sun beam", "sunbeam story", "sunny spot", "the sunbeam story"],
    text: `There was a sunbeam on the kitchen floor.
<break time="600ms"/>
Hashi had been lying in it for two hours.
<break time="1s"/>
"Hashi," said Winston, "what are you doing?"
<break time="600ms"/>
"Sitting in the sun," said Hashi. His eyes were closed.
<break time="600ms"/>
"Can I sit in the sun too?" asked Winston.
<break time="600ms"/>
"The sunbeam is not very wide," said Hashi.
<break time="1s"/>
Winston looked at the sunbeam. Hashi was right. It was narrow.
<break time="600ms"/>
He sat at the edge of it. His left paw was in the sun. The rest of him was not.
<break time="600ms"/>
"This is not very warm," said Winston.
<break time="600ms"/>
"You are mostly in the shade," said Hashi.
<break time="600ms"/>
"Could you move a little?" asked Winston.
<break time="600ms"/>
Hashi moved a little. Winston moved into the space.
<break time="1s"/>
They lay side by side in the sunbeam. It was a tight fit.
<break time="600ms"/>
"This is better," said Winston.
<break time="600ms"/>
"It is a bit crowded," said Hashi.
<break time="600ms"/>
"Sorry," said Winston.
<break time="1s"/>
They were quiet for a while. The sun moved.
<break time="600ms"/>
"Hashi," said Winston, "the sun is moving."
<break time="600ms"/>
"It always does," said Hashi.
<break time="1s"/>
The sunbeam moved slowly across the floor. They moved with it, one inch at a time, until they had crossed the entire kitchen.
<break time="600ms"/>
"We have moved quite far," said Winston.
<break time="600ms"/>
"We followed the sun," said Hashi.
<break time="600ms"/>
"Should we follow it back?" asked Winston.
<break time="600ms"/>
"No," said Hashi. "We have done enough for one day."
<break time="600ms"/>
They stayed where they were and went to sleep.
<break time="2s"/>
The end.`,
  },

  {
    id: "the-neighbors-cat",
    title: "The Neighbor's Cat",
    names: ["the neighbor's cat", "neighbor's cat", "gerald", "the neighbors cat", "other cat", "gerald the cat"],
    text: `A cat appeared on the fence. It was not Hashi.
<break time="600ms"/>
Winston looked at the cat. The cat looked at Winston.
<break time="1s"/>
"Hashi," said Winston, "there is another cat."
<break time="600ms"/>
Hashi came to the window. He looked at the cat on the fence. The cat looked back at him.
<break time="600ms"/>
"That is Gerald," said Hashi.
<break time="600ms"/>
"You know him?" asked Winston.
<break time="600ms"/>
"We have an understanding," said Hashi.
<break time="600ms"/>
"What kind of understanding?" asked Winston.
<break time="600ms"/>
"He stays on his side. I stay on mine," said Hashi.
<break time="600ms"/>
"That sounds like no understanding at all," said Winston.
<break time="600ms"/>
"It works well," said Hashi.
<break time="1s"/>
Gerald the cat sat on the fence and looked very comfortable.
<break time="1s"/>
"Can I say hello?" asked Winston.
<break time="600ms"/>
"You may try," said Hashi.
<break time="1s"/>
Winston went outside. "Hello!" he said to Gerald.
<break time="600ms"/>
Gerald looked at Winston for a long time. Then he looked away.
<break time="600ms"/>
"He did not say hello back," said Winston.
<break time="600ms"/>
"No," said Hashi.
<break time="600ms"/>
"Is he unfriendly?" asked Winston.
<break time="600ms"/>
"He is a cat," said Hashi.
<break time="1s"/>
Winston thought about this. "You are a cat," he said.
<break time="600ms"/>
"Yes," said Hashi. "And you said hello to me once too."
<break time="600ms"/>
"And now we are best friends," said Winston.
<break time="600ms"/>
"Give Gerald some time," said Hashi.
<break time="1s"/>
Gerald stretched on the fence, yawned, and walked away.
<break time="600ms"/>
"How much time?" asked Winston.
<break time="600ms"/>
"A few years," said Hashi.
<break time="2s"/>
The end.`,
  },

  {
    id: "the-sick-day",
    title: "The Sick Day",
    names: ["the sick day", "sick day", "sick story", "the sick day story", "winston sick", "feeling sick"],
    text: `Winston was not feeling well.
<break time="600ms"/>
He lay on his bed and did not want to eat and did not want to run and did not want to play.
<break time="1s"/>
"Winston," said Hashi, "are you sick?"
<break time="600ms"/>
"I think so," said Winston. "Everything feels bad."
<break time="600ms"/>
"Everything?" asked Hashi.
<break time="600ms"/>
"My tummy," said Winston. "And my head. And my legs feel heavy."
<break time="1s"/>
mom and dad came and felt his nose. They brought him water. They checked on him many times.
<break time="1s"/>
Hashi stayed nearby.
<break time="600ms"/>
He did not lie on top of Winston. He did not crowd him. He just stayed near, on the floor next to the bed.
<break time="1s"/>
"You do not have to stay," said Winston.
<break time="600ms"/>
"I know," said Hashi.
<break time="600ms"/>
"You could nap on the couch," said Winston. "It is warmer there."
<break time="600ms"/>
"I am fine here," said Hashi.
<break time="1s"/>
Winston was quiet for a while.
<break time="600ms"/>
"Hashi," he said.
<break time="600ms"/>
"Yes?" said Hashi.
<break time="600ms"/>
"Thank you for staying."
<break time="600ms"/>
"You would do the same," said Hashi.
<break time="600ms"/>
"I would," said Winston. He closed his eyes.
<break time="1s"/>
By evening Winston felt a little better. He ate some dinner. He did not run around but he wagged his tail.
<break time="600ms"/>
"You look better," said Hashi.
<break time="600ms"/>
"I feel better," said Winston.
<break time="600ms"/>
"Good," said Hashi. "You were very boring when you were sick."
<break time="600ms"/>
Winston laughed. "Sorry," he said.
<break time="600ms"/>
"Do not be sorry," said Hashi. "Just feel better."
<break time="2s"/>
The end.`,
  },

  {
    id: "the-bug",
    title: "The Bug",
    names: ["the bug", "bug", "bug story", "the bug story", "the insect"],
    text: `There was a bug on the floor.
<break time="600ms"/>
Hashi saw it first.
<break time="600ms"/>
He crouched down and watched it. His tail flicked back and forth.
<break time="1s"/>
The bug walked in one direction. Then another. It was not going anywhere in particular.
<break time="1s"/>
"What is that?" asked Winston.
<break time="600ms"/>
"A bug," said Hashi. He did not look up.
<break time="600ms"/>
"Is it a good bug or a bad bug?" asked Winston.
<break time="600ms"/>
"It is just a bug," said Hashi.
<break time="1s"/>
Winston came to look. He put his nose very close to the bug. The bug walked onto his nose.
<break time="600ms"/>
Winston crossed his eyes trying to see it.
<break time="600ms"/>
"It is on your nose," said Hashi.
<break time="600ms"/>
"I know," said Winston. He held very still.
<break time="600ms"/>
The bug walked across his nose and back onto the floor.
<break time="1s"/>
"Did it say anything?" asked Hashi.
<break time="600ms"/>
"Bugs do not talk," said Winston.
<break time="600ms"/>
"I know," said Hashi. "I was joking."
<break time="1s"/>
Winston looked at Hashi. "You made a joke," he said.
<break time="600ms"/>
"I occasionally make jokes," said Hashi.
<break time="600ms"/>
"I did not know that," said Winston.
<break time="600ms"/>
"There are many things you do not know about me," said Hashi.
<break time="1s"/>
The bug disappeared under the baseboard.
<break time="600ms"/>
"Where did it go?" asked Winston.
<break time="600ms"/>
"Away," said Hashi.
<break time="1s"/>
Winston looked at the baseboard for a long time. Then he looked at Hashi.
<break time="600ms"/>
"Tell me more things I do not know about you," said Winston.
<break time="600ms"/>
Hashi lay down and closed his eyes.
<break time="600ms"/>
"Later," he said.
<break time="2s"/>
The end.`,
  },

  {
    id: "the-rainy-day",
    title: "The Rainy Day",
    names: ["the rainy day", "rainy day", "rain story", "the rain story", "raining"],
    text: `It was raining.
<break time="600ms"/>
It had been raining all morning. Winston stood at the door and looked out.
<break time="600ms"/>
"Still raining," he said.
<break time="600ms"/>
"Yes," said Hashi.
<break time="600ms"/>
"When will it stop?" asked Winston.
<break time="600ms"/>
"When it stops," said Hashi.
<break time="1s"/>
Winston pressed his nose to the door glass. He fogged it up. He watched the raindrops run down the outside.
<break time="600ms"/>
"I am bored," said Winston.
<break time="600ms"/>
"You are always bored when it rains," said Hashi.
<break time="600ms"/>
"That is because there is nothing to do," said Winston.
<break time="600ms"/>
"There are many things to do inside," said Hashi.
<break time="600ms"/>
"Like what?" asked Winston.
<break time="1s"/>
Hashi thought about it. "We could nap," he said.
<break time="600ms"/>
"I do not want to nap," said Winston.
<break time="600ms"/>
"We could look out different windows," said Hashi.
<break time="600ms"/>
"That is the same as this," said Winston.
<break time="600ms"/>
"We could sit on the couch," said Hashi.
<break time="600ms"/>
"And do what?" asked Winston.
<break time="600ms"/>
"Sit," said Hashi.
<break time="1s"/>
Winston sighed. He walked to the couch and sat next to Hashi. They looked out the window at the rain.
<break time="600ms"/>
"This is not very exciting," said Winston.
<break time="600ms"/>
"It is not supposed to be," said Hashi.
<break time="600ms"/>
"I suppose not," said Winston.
<break time="1s"/>
After a while, Winston's breathing slowed. His head drooped. He was asleep.
<break time="1s"/>
Hashi looked at him.
<break time="600ms"/>
Outside, the rain kept falling.
<break time="600ms"/>
Inside, it was warm and quiet.
<break time="600ms"/>
Hashi closed his eyes too.
<break time="2s"/>
The end.`,
  },

  {
    id: "the-butterfly",
    title: "The Butterfly",
    names: ["the butterfly", "butterfly", "butterfly story", "the butterfly story"],
    text: `There was a butterfly in the yard.
<break time="600ms"/>
Winston saw it first. He froze.
<break time="600ms"/>
The butterfly landed on a flower. Its wings opened and closed.
<break time="1s"/>
"What is that?" Winston whispered.
<break time="600ms"/>
"A butterfly," said Hashi.
<break time="600ms"/>
"It is beautiful," said Winston.
<break time="1s"/>
The butterfly lifted off and floated above the grass. Winston watched it, his head moving slowly back and forth.
<break time="600ms"/>
He did not bark. He did not run. He did not shout.
<break time="1s"/>
Hashi looked at Winston. "You are being very calm," he said.
<break time="600ms"/>
"I do not want to scare it," said Winston.
<break time="1s"/>
The butterfly drifted near Winston's ear. He held perfectly still. His tail wagged very slowly, just the very tip.
<break time="600ms"/>
It flew past his nose.
<break time="600ms"/>
It landed for a moment on top of his head.
<break time="600ms"/>
Hashi watched.
<break time="1s"/>
Then the butterfly floated up and over the fence and was gone.
<break time="1s"/>
Winston watched where it went for a long time.
<break time="600ms"/>
"It was on my head," said Winston quietly.
<break time="600ms"/>
"I saw," said Hashi.
<break time="600ms"/>
"Did you see its wings?" asked Winston. "How do they do that?"
<break time="600ms"/>
"I do not know," said Hashi.
<break time="600ms"/>
"It was the best thing that has ever happened to me," said Winston.
<break time="1s"/>
Hashi sat down next to Winston. "I believe you," he said.
<break time="1s"/>
They looked at the yard where the butterfly had been.
<break time="600ms"/>
"Maybe it will come back," said Winston.
<break time="600ms"/>
"Maybe," said Hashi.
<break time="2s"/>
The end.`,
  },

  {
    id: "the-dark",
    title: "The Dark",
    names: ["the dark", "dark", "dark story", "the dark story", "power out", "lights out"],
    text: `The power went out.
<break time="600ms"/>
The house was completely dark.
<break time="1s"/>
"Hashi?" said Winston.
<break time="600ms"/>
"I am here," said Hashi.
<break time="600ms"/>
"Where?" said Winston.
<break time="600ms"/>
"Here," said Hashi.
<break time="1s"/>
There was some shuffling. There was a bump. "Ow," said Winston.
<break time="600ms"/>
"That is the table," said Hashi.
<break time="600ms"/>
"I know," said Winston.
<break time="1s"/>
mom and dad were searching for flashlights somewhere in the kitchen. There was a lot of noise.
<break time="1s"/>
"Hashi," said Winston, "I cannot see anything."
<break time="600ms"/>
"I can see a little," said Hashi.
<break time="600ms"/>
"Can you guide me?" asked Winston.
<break time="600ms"/>
"Where do you want to go?" asked Hashi.
<break time="600ms"/>
"Away from the table," said Winston.
<break time="1s"/>
Hashi walked to Winston. He could feel Winston's breath. He rubbed against his leg.
<break time="600ms"/>
"Follow me," said Hashi.
<break time="600ms"/>
He walked slowly. Winston followed. They went to the living room and found the couch.
<break time="600ms"/>
Winston climbed on. He made room for Hashi.
<break time="1s"/>
"Are you afraid of the dark?" asked Hashi.
<break time="600ms"/>
"A little," said Winston. "Are you?"
<break time="600ms"/>
"No," said Hashi.
<break time="600ms"/>
"That is good," said Winston. "Since you can see."
<break time="600ms"/>
"It is useful," admitted Hashi.
<break time="1s"/>
mom and dad found the flashlights. The room filled with soft light.
<break time="600ms"/>
"Better?" asked Hashi.
<break time="600ms"/>
"Much better," said Winston.
<break time="600ms"/>
He did not move away from Hashi. There was no reason to.
<break time="2s"/>
The end.`,
  },

  {
    id: "the-sock",
    title: "The Sock",
    names: ["the sock", "sock", "sock story", "the sock story", "winston and the sock"],
    text: `There was a sock on the floor.
<break time="600ms"/>
Winston looked at the sock.
<break time="600ms"/>
"Do not," said Hashi.
<break time="600ms"/>
"I was not going to do anything," said Winston.
<break time="600ms"/>
"You were going to pick it up," said Hashi.
<break time="600ms"/>
"I was going to look at it," said Winston.
<break time="1s"/>
He looked at the sock some more. It was a nice sock. It was striped.
<break time="600ms"/>
"Winston," said Hashi.
<break time="600ms"/>
"I am only looking," said Winston.
<break time="600ms"/>
He looked a little closer. He sniffed it.
<break time="600ms"/>
"That belongs to mom and dad," said Hashi.
<break time="600ms"/>
"I know," said Winston.
<break time="600ms"/>
"The last time you took a sock, you had to go to the vet," said Hashi.
<break time="600ms"/>
"I remember," said Winston.
<break time="600ms"/>
"It was expensive," said Hashi.
<break time="1s"/>
"I know," said Winston.
<break time="1s"/>
He sat down next to the sock. He did not pick it up.
<break time="600ms"/>
"Good," said Hashi.
<break time="1s"/>
They sat together and looked at the sock.
<break time="600ms"/>
"It is a very nice sock," said Winston.
<break time="600ms"/>
"It is an ordinary sock," said Hashi.
<break time="600ms"/>
"The stripes are very good," said Winston.
<break time="600ms"/>
"Please do not pick it up," said Hashi.
<break time="600ms"/>
"I will not," said Winston.
<break time="1s"/>
mom and dad came into the room and picked up the sock. They put it in the laundry.
<break time="600ms"/>
Winston watched it go.
<break time="600ms"/>
"I did not pick it up," he said.
<break time="600ms"/>
"You did very well," said Hashi.
<break time="600ms"/>
"Thank you," said Winston. "That was hard."
<break time="2s"/>
The end.`,
  },

  {
    id: "the-nap",
    title: "The Nap",
    names: ["the nap", "nap", "nap story", "the nap story", "sleeping together"],
    text: `It was the middle of the afternoon. Hashi was asleep on the couch.
<break time="600ms"/>
Winston came over. He put his head on the cushion next to Hashi.
<break time="600ms"/>
"I want to nap," said Winston.
<break time="600ms"/>
"Then nap," said Hashi. He did not open his eyes.
<break time="600ms"/>
"I cannot nap by myself," said Winston.
<break time="600ms"/>
"You can," said Hashi.
<break time="600ms"/>
"I mean I do not like to," said Winston.
<break time="1s"/>
Hashi did not say anything.
<break time="600ms"/>
"May I nap here?" asked Winston.
<break time="1s"/>
Hashi moved over a little. Just a little. Not very much.
<break time="1s"/>
Winston climbed onto the couch. He turned around twice. He lay down with his head on Hashi's back.
<break time="600ms"/>
"Winston," said Hashi.
<break time="600ms"/>
"Sorry," said Winston. He moved his head to the cushion instead.
<break time="600ms"/>
"Better," said Hashi.
<break time="1s"/>
They lay there quietly. The sun came in through the window. It was warm.
<break time="1s"/>
Winston's breathing slowed.
<break time="600ms"/>
"Hashi?" he said.
<break time="600ms"/>
"Mmm," said Hashi.
<break time="600ms"/>
"This is nice," said Winston.
<break time="600ms"/>
"Go to sleep," said Hashi.
<break time="600ms"/>
Winston was quiet. Then he said, "I will."
<break time="600ms"/>
And he did.
<break time="1s"/>
Hashi listened to him breathing. It was a familiar sound. A very good sound.
<break time="600ms"/>
He went back to sleep too.
<break time="2s"/>
The end.`,
  },

  {
    id: "the-garden",
    title: "The Garden",
    names: ["the garden", "garden", "garden story", "the garden story", "helping in the garden"],
    text: `mom and dad were working in the garden.
<break time="600ms"/>
Hashi watched from the porch. He watched them dig and plant and water things.
<break time="600ms"/>
Winston was helping.
<break time="600ms"/>
Or trying to help.
<break time="1s"/>
He had dug a hole near the roses. mom and dad had filled it back in. He had dug another hole near the tomatoes. mom and dad had filled that one in too.
<break time="600ms"/>
"Winston," said mom and dad.
<break time="600ms"/>
"I am gardening," said Winston.
<break time="600ms"/>
"We can see that," said mom and dad.
<break time="1s"/>
Hashi came down from the porch and walked along the edge of the garden. He sniffed each plant very carefully.
<break time="600ms"/>
"What are you doing?" asked Winston.
<break time="600ms"/>
"Inspecting," said Hashi.
<break time="600ms"/>
"Can I inspect too?" asked Winston.
<break time="600ms"/>
"You may sniff," said Hashi. "But do not dig."
<break time="1s"/>
They walked along the row of plants together. Winston sniffed each one. He sneezed at the basil.
<break time="600ms"/>
"I sneezed," said Winston.
<break time="600ms"/>
"Basil will do that," said Hashi.
<break time="1s"/>
They reached the end of the row. mom and dad watched them.
<break time="600ms"/>
"Good inspectors," said one owner.
<break time="600ms"/>
Winston's tail wagged.
<break time="1s"/>
Hashi sat down in a patch of sunlight between the rows.
<break time="600ms"/>
"Is this allowed?" asked Winston. "Sitting in the garden?"
<break time="600ms"/>
"I am already sitting," said Hashi. "So apparently yes."
<break time="600ms"/>
Winston sat down too.
<break time="1s"/>
They stayed in the garden for the rest of the afternoon. They did not dig any more holes.
<break time="2s"/>
The end.`,
  },

  {
    id: "the-goodbye",
    title: "The Goodbye",
    names: ["the goodbye", "goodbye", "goodbye story", "the goodbye story", "owners leaving for a trip"],
    text: `mom and dad packed a bag.
<break time="600ms"/>
Winston watched with wide eyes. "They are leaving," he said.
<break time="600ms"/>
"For a few days," said Hashi.
<break time="600ms"/>
"A few days is a long time," said Winston.
<break time="600ms"/>
"It is," agreed Hashi.
<break time="1s"/>
mom and dad came to say goodbye. They petted Winston. He leaned against them very hard. They petted Hashi. He allowed it for a long time, longer than usual.
<break time="600ms"/>
"We will be back soon," they said.
<break time="1s"/>
Then they left.
<break time="1s"/>
The house was quiet.
<break time="1s"/>
Winston went to the door. He sat. He did not say anything for a while.
<break time="600ms"/>
"They will be back," said Hashi.
<break time="600ms"/>
"I know," said Winston. "I just miss them already."
<break time="600ms"/>
"I know," said Hashi.
<break time="1s"/>
A neighbor came to give them dinner and take Winston for a walk. She was very nice.
<break time="600ms"/>
But it was not the same.
<break time="1s"/>
At night, Winston and Hashi slept on mom and dad' bed. This was normally not allowed. But there were no owners to say so.
<break time="600ms"/>
"Are we allowed to be here?" asked Winston.
<break time="600ms"/>
"Tonight we are," said Hashi.
<break time="1s"/>
They lay in the dark on the big bed.
<break time="600ms"/>
"Hashi?" said Winston.
<break time="600ms"/>
"Yes," said Hashi.
<break time="600ms"/>
"I am glad you are here," said Winston.
<break time="600ms"/>
"Go to sleep," said Hashi.
<break time="600ms"/>
But he moved a little closer before he closed his eyes.
<break time="2s"/>
The end.`,
  },

  {
    id: "the-end-of-the-day",
    title: "The End of the Day",
    names: ["the end of the day", "end of the day", "end of day story", "bedtime story", "goodnight story", "the end of day"],
    text: `The sun was going down.
<break time="600ms"/>
Hashi was on the windowsill. Winston was on his bed. The house was quiet.
<break time="1s"/>
mom and dad had made dinner. The dishes were done. The lights were low.
<break time="1s"/>
"Hashi," said Winston, "what was the best part of today?"
<break time="600ms"/>
Hashi thought about it. "The sunbeam in the hallway," he said. "It was a good one."
<break time="600ms"/>
"Mine was the walk," said Winston. "I found a very good stick."
<break time="600ms"/>
"You left the stick outside," said Hashi.
<break time="600ms"/>
"I know," said Winston. "But it was a good stick."
<break time="1s"/>
They were quiet.
<break time="1s"/>
"Hashi," said Winston, "do you think tomorrow will be a good day?"
<break time="600ms"/>
"I think it has a reasonable chance," said Hashi.
<break time="600ms"/>
"That is not very exciting," said Winston.
<break time="600ms"/>
"I am a reasonable cat," said Hashi.
<break time="1s"/>
Winston yawned. He stretched out on his bed. He turned once and lay still.
<break time="600ms"/>
"I think tomorrow will be very good," said Winston.
<break time="600ms"/>
"Then let us sleep so it can come," said Hashi.
<break time="600ms"/>
"Good idea," said Winston.
<break time="1s"/>
One owner came by and turned off the last light. They stopped for a moment.
<break time="600ms"/>
"Good night," they said.
<break time="1s"/>
Winston's tail wagged once from his bed.
<break time="600ms"/>
Hashi blinked once, slowly, from the windowsill.
<break time="1s"/>
The house was dark.
<break time="600ms"/>
The house was full.
<break time="600ms"/>
Everyone was home.
<break time="2s"/>
The end.`,
  },

  // ============================================================
  // ADD MORE STORIES — copy this template:
  // ============================================================
  // {
  //   id: "your-story-id",
  //   title: "Your Story Title",
  //   names: ["trigger phrase 1", "trigger phrase 2"],
  //   text: `Your story text here.
  //   <break time="1s"/>
  //   The end.`,
  // },
];

module.exports = { STORIES };
