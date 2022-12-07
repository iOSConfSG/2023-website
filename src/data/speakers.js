const speakers = [
  {
    "name": "Paul Hudson",
    "company": "Hacking with Swift",
    "imageUrl": "/images/speakers/paul.jpg",
    "companyUrl": "https://www.hackingwithswift.com/",
    "twitter": "twostraws",
    "linkedin": "",
    "shortBio": "Paul is the author of Hacking with Swift. He quite likes Swift. And coffee. (But mostly Swift.) (And coffee.)",
    "bio": "Paul is the author of Hacking with Swift, Pro Swift, Swift Design Patterns, Server-Side Swift, Hacking with macOS, Hacking with watchOS, Hacking with tvOS, Swift Coding Challenges, and more. Suffice it to say, he quite likes Swift. And coffee. (But mostly Swift.) (And coffee.)",
  },
  {
    "name": "Danijela Vrzan",
    "company": "Bally's Interactive",
    "imageUrl": "/images/speakers/danijela.jpg",
    "companyUrl": "https://www.ballys.com/about/ballys-interactive-na/default.aspx",
    "twitter": "dvrzan",
    "linkedin": "",
    "shortBio": "Danijela is an iOS Developer and an article author for raywenderlich.com. In her free time, you can find her hiking or lifting heavy weights at the gym.",
    "bio": "Danijela is an iOS Developer and an article author for raywenderlich.com. In her free time, you can find her hiking or lifting heavy weights at the gym. When not working out, she's playing video-games, cooking, and trying to keep up with Swift updates!"
  },
  {
    "name": "Donny Wals",
    "company": "Freelance iOS Dev",
    "imageUrl": "/images/speakers/donny.jpeg",
    "companyUrl": "https://www.donnywals.com/",
    "twitter": "donnywals",
    "linkedin": "https://www.linkedin.com/in/donny-wals-33660014/?originalSubdomain=nl",
    "shortBio": "Donny is a freelance iOS engineer and author who loves learning and sharing knowledge.",
    "bio": "Donny is a freelance iOS engineer who loves learning and sharing knowledge. When he is not working on something iOS-related, you'll probably find him noodling around on his guitar. "
  },
  {
    "name": "Tunde Adegoroye",
    "company": "Bally's Interactive",
    "imageUrl": "/images/speakers/tunde.jpg",
    "companyUrl": "https://ballysinteractive.com",
    "twitter": "tundsdev",
    "linkedin": "",
    "shortBio": "SwiftUI and all things related to iOS development on YouTube @tundsdev",
    "bio": "Tunde teaches SwiftUI and all things related to iOS development on YouTube @tundsdev. He is a Lead App Developer based in Manchester, UK. When he is not coding you can catch him travelling, watching anime, trying new foods & experiencing new experiences."
  },
  {
    "name": "Antoine van der Lee",
    "company": "WeTransfer",
    "imageUrl": "/images/speakers/antoine.jpeg",
    "companyUrl": "https://www.avanderlee.com/",
    "twitter": "twannl",
    "linkedin": "https://www.linkedin.com/in/ajvanderlee/",
    "shortBio": "As a Staff iOS Engineer at WeTransfer, Antoine’s work is focused on code architecture and team processes.",
    "bio": "As a Staff iOS Engineer at WeTransfer, Antoine’s work is focused on code architecture and team processes."
  },
  {
    "name": "Betty Godier",
    "company": "VanMoof",
    "imageUrl": "/images/speakers/betty.png",
    "companyUrl": "https://www.vanmoof.com/en",
    "twitter": "bettygodier",
    "linkedin": "",
    "shortBio": "Betty works as a Senior iOS Engineer at VanMoof in Amsterdam. In her spare time, she enjoys sailing with her family.",
    "bio": "Betty works as a Senior iOS Engineer at VanMoof in Amsterdam. In her spare time, she enjoys sailing with her family."
  },    
  {
    "name": "Adam Bell",
    "company": "Netflix",
    "imageUrl": "/images/speakers/bell.jpeg",
    "companyUrl": "https://www.netflix.com/",
    "twitter": "b3ll",
    "linkedin": "https://www.linkedin.com/in/donny-wals-33660014/?originalSubdomain=nl",
    "shortBio": "Adam is a software engineer specialising in audio, animations, interactions, and gestures, currently working at Netflix.",
    "bio": "Adam is a software engineer specialising in audio, animations, interactions, and gestures, currently working at Netflix. He is the creator of a highly performant animation and gestural interaction library called Motion (https://github.com/b3ll/Motion). In his spare time, he enjoys racing cars, messing with synthesizers, listening to records, and dabbling with the internals of Apple products."
  },
  {
    "name": "Eleni Papanikolopoulou",
    "company": "Skroutz",
    "imageUrl": "/images/speakers/eleni.jpg",
    "companyUrl": "https://www.skroutz.gr",
    "twitter": "elenipapanikolo",
    "linkedin": "",
    "shortBio": "Eleni works at Skroutz, the biggest e-commerce platform in Greece and is part of the core mobile team focusing primarily on infrastructure, architecture and testing.",
    "bio": "Eleni is an iOS Developer with many years of experience working on various iOS Apps. She is currently working at Skroutz, the biggest e-commerce platform in Greece and she is part of the core mobile team focusing primarily on infrastructure, architecture and testing. She is the author of several articles in Medium and when she is not working she enjoys skiing and traveling."
  },  
  {
    "name": "Masahiko Funaki",
    "company": "CircleCI",
    "imageUrl": "/images/speakers/masahiko-funaki.jpg",
    "companyUrl": "https://circleci.com/",
    "twitter": "mfunaki",
    "linkedin": "",
    "shortBio": "Principal, Developer Advocate at CircleCI",
    "bio": "Masahiko is Principal, Developer Advocate in JAPAC at CircleCI, a Continuous Integration and Delivery platform used by the world's best engineering teams. Masahiko is passionate about helping organizations of all sizes achieve digital innovation and has developed a deep understanding of both the business and technology sides through hands-on experience as an engineer and as a leader in global enterprises like Microsoft and SAP."
  },
  {
    "name": "Jordi Bruin",
    "company": "",
    "imageUrl": "/images/speakers/jordi.jpeg",
    "companyUrl": "https://goodsnooze.gumroad.com/",
    "twitter": "jordibruin",
    "linkedin": "",
    "shortBio": "Apple Design Award Finalist",
    "bio": "Builds things that make life easier and helping others do the same"
  },  
  {
    "name": "Vincent Pradeilles",
    "company": "PhotoRoom",
    "imageUrl": "/images/speakers/vincent.jpg",
    "companyUrl": "https://www.photoroom.com",
    "twitter": "v_pradeilles",
    "linkedin": "",
    "shortBio": "Vincent works at PhotoRoom and contributes to building great apps. He also enjoys sharing about Swift and iOS on his YouTube channel.",
    "bio": "Vincent started working on iOS apps back in 2011. After a few years spent on building great apps for major European banks, he's now part of the team at PhotoRoom. He loves Swift and enjoys talking about it on the Internet. In 2020, he started a YouTube channel to share his knowledge of Swift and iOS. He is also the one behind the Twitter account @ios_memes"
  },
  {
    "name": "Priyal Porwal",
    "company": "Paytm",
    "imageUrl": "/images/speakers/priyal.jpg",
    "companyUrl": "https://paytm.com",
    "twitter": "priyal_porwal_",
    "linkedin": "https://www.linkedin.com/in/priyal-porwal",
    "shortBio": "Priyal loves to learn and share knowledge with the community. She is passionate about accessibility, application security, testability and animations.",
    "bio": "Priyal loves to learn and share knowledge with the community. She is passionate about accessibility, application security, testability and animations. You can catch her traveling, watching movies or enjoying cooking when she is not coding."
  },  
  {
    "name": "Daniel H Steinberg",
    "company": "Dim Sum Thinking",
    "imageUrl": "/images/speakers/daniel.jpg",
    "companyUrl": "https://dimsumthinking.com",
    "twitter": "dimsumthinking",
    "linkedin": "",
    "shortBio": "Daniel is the author of more than a dozen books, including the best selling books A Functional Programming Kickstart, A SwiftUI Kickstart, A Swift Kickstart and Dear Elena.",
    "bio": "Daniel is the author of more than a dozen books including the best selling books A Functional Programming Kickstart, A SwiftUI Kickstart, A Swift Kickstart and Dear Elena. He presents iOS, Functional Programming, SwiftUI, and Swift training and consults through his company Dim Sum Thinking. He has written apps for the iPhone and the iPad since the SDKs first appeared and has written programs for the Mac all the way back to System 7. When he's not coding or talking about coding for the Mac, the iPhone, and the iPad he's probably cooking, baking bread, or hanging out with friends."
  },
  {
    "name": "More speakers to be announced",
    "company": "",
    "imageUrl": "/images/speakers/organiser.png",
    "companyUrl": "",
    "twitter": "iosconfsg",
    "linkedin": "",
    "shortBio": "We'll update this list soon, stay tuned!",
    "bio": "Stay tuned"
  },
]
export default speakers
