db = db.getSiblingDB("citywalker");

db.createCollection("cities");

db.cities.insertMany([
  {
    uuid: "44694d4a-59c4-48ea-9aa9-6dbbb2916b80",
    city: "London",
    continent: "Europe",
    lng: "en",
    lngSpoken: "English",
    country: "United Kingdom",
    countryCode: "GB",
    currency: "GBP",
    visa: "https://www.gov.uk/check-uk-visa",
    adapterPlug: "G",
    places: [
      {
        city: "London",
        lng: "en",
        uuid: "ce3dfb36-2c96-483a-b55e-962b3d455ea4",
        name: "Big Ben",
        image: {
          credits: "DiscoA340",
          license: "https://creativecommons.org/licenses/by-sa/4.0",
        },
        location: {
          type: "Point",
          coordinates: [51.5007, -0.1246],
        },
        website: "https://www.parliament.uk/bigben",
        visit: {
          all: 0,
          outside: 60,
          schedule: [
            ["09:00", "17:30"],
            ["09:00", "17:30"],
            ["09:00", "17:30"],
            ["09:00", "17:30"],
            ["09:00", "17:30"],
            ["Closed"],
            ["Closed"],
          ],
        },
        price: 0,
        category: "Monument",
        information:
          "Big Ben is one of London's most iconic landmarks, renowned for its striking clock tower and melodious chimes. Officially known as the Elizabeth Tower, the structure stands at the north end of the Palace of Westminster and houses the Great Bell, which is commonly referred to as Big Ben. The tower was completed in 1859 and has since become a symbol of British heritage and parliamentary democracy. Visitors can admire the exterior of the tower from the street and enjoy stunning views of the surrounding area, including the River Thames and Westminster Bridge. While access to the interior of the tower is restricted to UK residents, the exterior remains a must-see attraction for tourists visiting London.",
        description:
          "Iconic clock tower housing the Great Bell of the clock at the north end of the Palace of Westminster.",
        priority: 3,
      },
      {
        city: "London",
        lng: "en",
        uuid: "6ba00fb0-66dc-4e25-8c55-f976ac725c82",
        name: "Buckingham Palace",
        image: {
          credits: "Diliff",
          license: "https://creativecommons.org/licenses/by-sa/3.0",
        },
        location: {
          type: "Point",
          coordinates: [51.5014, -0.1415],
        },
        website: "https://www.rct.uk/visit/the-state-rooms-buckingham-palace",
        visit: {
          all: 150,
          outside: 60,
          schedule: [
            ["Closed"],
            ["9:30", "19:30"],
            ["9:30", "19:30"],
            ["9:30", "19:30"],
            ["9:30", "19:30"],
            ["9:30", "19:30"],
            ["9:30", "19:30"],
          ],
        },
        price: 33,
        category: "Monument",
        information:
          "Buckingham Palace is the official residence of the British monarch and the administrative headquarters of the monarchy. Located in the City of Westminster, the palace is a symbol of the British monarchy and a popular tourist attraction. Visitors can explore the opulent state rooms, which are used for official and ceremonial purposes, and admire the palace's impressive architecture and artwork. Highlights of the tour include the Grand Staircase, the Throne Room, and the Ballroom, where state banquets and receptions are held. Additionally, visitors can witness the Changing of the Guard ceremony, a traditional military ritual that takes place daily during the summer months and every other day during the rest of the year. Buckingham Palace also has extensive gardens, which are occasionally open to the public during the summer months. Whether you're interested in history, architecture, or royal traditions, a visit to Buckingham Palace offers a fascinating glimpse into British royal life.",
        description:
          "Official residence of the British monarch, with opulent state rooms and ceremonial events.",
        priority: 5,
      },
      {
        city: "London",
        lng: "en",
        uuid: "3452fdd6-6a74-4ab1-935d-5ca721e3a083",
        name: "Tower of London",
        image: {
          credits: "Bob Collowan",
          license: "https://creativecommons.org/licenses/by-sa/3.0",
        },
        location: {
          type: "Point",
          coordinates: [51.5081, -0.0759],
        },
        website: "https://www.hrp.org.uk/tower-of-london/",
        visit: {
          all: 210,
          outside: 60,
          schedule: [
            ["10:00", "16:30"],
            ["09:00", "16:30"],
            ["09:00", "16:30"],
            ["09:00", "16:30"],
            ["09:00", "16:30"],
            ["09:00", "16:30"],
            ["10:00", "16:30"],
          ],
        },
        price: 33,
        category: "Monument",
        information:
          "The Tower of London, officially Her Majesty's Royal Palace and Fortress of the Tower of London, is a historic castle located on the north bank of the River Thames in central London. It was founded towards the end of 1066 as part of the Norman Conquest of England. The White Tower, which gives the entire castle its name, was built by William the Conqueror in 1078 and was a resented symbol of oppression, inflicted upon London by the new ruling elite. The castle was used as a prison from 1100 until 1952, although that was not its primary purpose. A grand palace early in its history, it served as a royal residence. As a whole, the Tower is a complex of several buildings set within two concentric rings of defensive walls and a moat. The Tower has served variously as an armoury, a treasury, a menagerie, the home of the Royal Mint, a public records office, and the home of the Crown Jewels of England. The Tower of London is a must-visit for anyone interested in British history.",
        description: "Historic fortress and former royal palace.",
        priority: 7,
      },
      {
        city: "London",
        lng: "en",
        uuid: "9555f803-fd1b-48f0-ab80-c7a581557af9",
        name: "Tower Bridge",
        image: {
          credits: "Colin",
          license: "https://creativecommons.org/licenses/by-sa/4.0",
        },
        location: {
          type: "Point",
          coordinates: [51.5055, -0.0757],
        },
        website: "https://www.towerbridge.org.uk/",
        visit: {
          all: 150,
          outside: 60,
          schedule: [
            ["10:00", "17:30"],
            ["10:00", "17:30"],
            ["10:00", "17:30"],
            ["10:00", "17:30"],
            ["10:00", "17:30"],
            ["10:00", "17:30"],
            ["10:00", "17:30"],
          ],
        },
        price: 13,
        category: "Monument",
        information:
          "Tower Bridge is one of London's most recognizable landmarks, known for its distinctive bascule and suspension design. Completed in 1894, the bridge spans the River Thames, connecting the boroughs of Tower Hamlets and Southwark. Visitors can explore the bridge's high-level walkways, offering panoramic views of the city skyline and the opportunity to see the bridge's inner workings. The Tower Bridge Exhibition, located within the bridge's twin towers, provides insights into the bridge's history and engineering marvels. Additionally, visitors can witness the bridge's iconic bascules in action during scheduled bridge lifts. Tower Bridge is a must-visit attraction for anyone interested in London's architectural and engineering heritage.",
        description:
          "Iconic bascule and suspension bridge over the River Thames.",
        priority: 8,
      },
      {
        city: "London",
        lng: "en",
        uuid: "36c6c6b6-8131-440c-b6fb-7e32b29c242c",
        name: "Westminster Abbey",
        image: {
          credits: "Σπάρτακος",
          license: "https://creativecommons.org/licenses/by-sa/4.0",
        },
        location: {
          type: "Point",
          coordinates: [51.4994, -0.128],
        },
        website: "https://www.westminster-abbey.org/",
        visit: {
          all: 180,
          outside: 60,
          schedule: [
            ["9:30", "15:30"],
            ["9:30", "15:30"],
            ["9:30", "15:30"],
            ["9:30", "15:30"],
            ["9:30", "15:30"],
            ["9:30", "13:30"],
            ["Closed"],
          ],
        },
        price: 28,
        category: "Monument",
        information:
          "Westminster Abbey, formally known as the Collegiate Church of St Peter at Westminster, is an iconic historical and religious landmark in London. Founded in the 10th century, the abbey has been the site of coronations and burials of English monarchs for centuries. Visitors can explore its impressive Gothic architecture, admire its medieval stained glass windows, and discover the tombs of historical figures such as Queen Elizabeth I, Isaac Newton, and Charles Darwin. In addition to its historical and religious significance, Westminster Abbey also hosts choral music concerts and other cultural events. It is a must-visit destination for those interested in British history, Gothic architecture, and religious culture.",
        description:
          "Iconic Gothic abbey with centuries of history, hosting royal ceremonies and burials.",
        priority: 9,
      },
      {
        city: "London",
        lng: "en",
        uuid: "1b430f35-a751-4786-8179-800472dc3350",
        name: "London Eye",
        image: {
          credits: "Khamtran",
          license: "https://creativecommons.org/licenses/by-sa/3.0",
        },
        location: {
          type: "Point",
          coordinates: [51.5033, -0.1195],
        },
        website: "https://www.londoneye.com/",
        visit: {
          all: 90,
          outside: 30,
          schedule: [
            ["11:00", "18:00"],
            ["11:00", "18:00"],
            ["11:00", "18:00"],
            ["11:00", "18:00"],
            ["11:00", "18:00"],
            ["11:00", "18:00"],
            ["10:00", "20:00"],
          ],
        },
        price: 38,
        category: "Tourist attraction",
        information:
          "The London Eye is a giant Ferris wheel located on the South Bank of the River Thames. It offers breathtaking panoramic views of London's skyline and is one of the city's most iconic landmarks. Each rotation of the wheel takes about 30 minutes, providing visitors with ample time to enjoy the spectacular vistas. The London Eye is particularly stunning during sunset and at night when the city lights up. Visitors can also enhance their experience with options like champagne flights or private capsules for special occasions. Additionally, the London Eye offers interactive experiences and educational exhibits, making it suitable for visitors of all ages. Whether you're a first-time visitor or a seasoned traveler, a ride on the London Eye is a must-do activity in London.",
        description:
          "Iconic giant Ferris wheel offering panoramic views of the city skyline.",
        priority: 10,
      },
      {
        city: "London",
        lng: "en",
        uuid: "8be63fff-08d8-4d6b-a6ca-a82f2ac34c1a",
        name: "St. Paul's Cathedral",
        image: {
          credits: "Colin",
          license: "https://creativecommons.org/licenses/by-sa/4.0",
        },
        location: {
          type: "Point",
          coordinates: [51.5138, -0.0991],
        },
        website: "https://www.stpauls.co.uk/",
        visit: {
          all: 180,
          outside: 60,
          schedule: [
            ["8:30", "16:30"],
            ["8:30", "16:30"],
            ["8:30", "16:30"],
            ["8:30", "16:30"],
            ["8:30", "16:30"],
            ["8:30", "16:30"],
            ["Closed"],
          ],
        },
        price: 25,
        category: "Church",
        information:
          "St. Paul's Cathedral is one of London's most iconic landmarks, renowned for its stunning architecture and rich history. Designed by Sir Christopher Wren in the late 17th century, the cathedral's dome is an iconic feature of the London skyline. Visitors can explore the cathedral's interior, including the impressive nave, intricate mosaics, and beautiful chapels. The Whispering Gallery, located inside the dome, offers unique acoustic effects and panoramic views of the interior. For those willing to climb further, the Stone Gallery and Golden Gallery provide breathtaking views of the city skyline. St. Paul's Cathedral also has a fascinating history, having survived the Great Fire of London in 1666 and played a prominent role in national events such as the funerals of Lord Nelson and Sir Winston Churchill. Whether you're interested in architecture, history, or religious heritage, a visit to St. Paul's Cathedral promises a memorable and enlightening experience.",
        description:
          "Iconic cathedral with stunning architecture and historic significance.",
        priority: 11,
      },
      {
        city: "London",
        lng: "en",
        uuid: "9271f2d9-c2f1-444d-ac41-e8a1ea1e0154",
        name: "Trafalgar Square",
        image: {
          credits: "Diliff",
          license: "https://creativecommons.org/licenses/by-sa/3.0",
        },
        location: {
          type: "Point",
          coordinates: [51.508, -0.1276],
        },
        website:
          "https://www.london.gov.uk/about-us/our-building-and-squares/trafalgar-square",
        visit: {
          all: 0,
          outside: 60,
          schedule: [
            ["Open"],
            ["Open"],
            ["Open"],
            ["Open"],
            ["Open"],
            ["Open"],
            ["Open"],
          ],
        },
        price: 0,
        category: "Monument",
        information:
          "Trafalgar Square is one of London's most iconic public spaces, renowned for its historic monuments, architectural landmarks, and vibrant cultural scene. Situated in the heart of the city's West End, the square is surrounded by landmarks such as the National Gallery, St Martin-in-the-Fields church, and the Admiralty Arch. The focal point of the square is Nelson's Column, a towering monument commemorating Admiral Horatio Nelson's victory at the Battle of Trafalgar. Visitors can also admire the square's four lion statues, historic fountains, and sculptures of prominent figures such as King George IV and General Sir Charles James Napier. Trafalgar Square is a popular destination for events and celebrations, including cultural festivals, concerts, and political demonstrations. Whether you're admiring the architecture, people-watching, or attending a public event, Trafalgar Square offers a dynamic and memorable experience in the heart of London.",
        description:
          "Iconic public square with historic monuments, fountains, and cultural events.",
        priority: 13,
      },
      {
        city: "London",
        lng: "en",
        uuid: "2d008dc7-2117-43dc-853f-84901c68517f",
        name: "Sky Garden",
        image: {
          credits: "Colin",
          license: "https://creativecommons.org/licenses/by-sa/4.0",
        },
        location: {
          type: "Point",
          coordinates: [51.5113, -0.0836],
        },
        website: "https://skygarden.london/",
        visit: {
          all: 0,
          outside: 120,
          schedule: [
            ["10:00", "18:00"],
            ["10:00", "18:00"],
            ["10:00", "18:00"],
            ["10:00", "18:00"],
            ["10:00", "18:00"],
            ["10:00", "21:00"],
            ["11:00", "21:00"],
          ],
        },
        price: 0,
        category: "Tourist attraction",
        information:
          "Sky Garden is a unique public space located atop the iconic 20 Fenchurch Street skyscraper, also known as the 'Walkie-Talkie' building. Situated in the heart of London's financial district, Sky Garden offers visitors panoramic views of the city skyline from its expansive rooftop garden. The garden features lush greenery, landscaped terraces, and observation decks where visitors can admire breathtaking vistas of landmarks such as the Tower of London, Tower Bridge, and the River Thames. In addition to its stunning views, Sky Garden is home to a variety of dining options, including restaurants, bars, and cafes, where visitors can enjoy a meal or drinks with a backdrop of the London skyline. Admission to Sky Garden is free, but advance booking is required to guarantee entry. Whether you're a tourist seeking a unique perspective of London or a local looking for a tranquil oasis in the city, Sky Garden offers an unforgettable experience for visitors of all ages.",
        description:
          "Rooftop garden offering panoramic views of London's skyline, with restaurants and observation decks.",
        priority: 14,
      },
      {
        city: "London",
        lng: "en",
        uuid: "7beb607a-f168-4fc4-96f3-73ed3b495bff",
        name: "Natural History Museum",
        image: {
          credits: "Julian Herzog",
          license: "https://creativecommons.org/licenses/by/4.0",
        },
        location: {
          type: "Point",
          coordinates: [51.4966, -0.1764],
        },
        website: "https://www.nhm.ac.uk/",
        visit: {
          all: 240,
          outside: 30,
          schedule: [
            ["10:00", "17:50"],
            ["10:00", "17:50"],
            ["10:00", "17:50"],
            ["10:00", "17:50"],
            ["10:00", "17:50"],
            ["10:00", "17:50"],
            ["10:00", "17:50"],
          ],
        },
        price: 0,
        category: "Museum",
        information:
          "The Natural History Museum in London is one of the world's leading museums dedicated to the natural world. Founded in 1881, the museum's extensive collection spans over 80 million specimens, including fossils, minerals, plants, animals, and human remains. Visitors can explore the museum's numerous galleries and exhibitions, which cover a wide range of topics such as evolution, biodiversity, geology, and ecology. Highlights of the museum's collection include the skeleton of a Diplodocus dinosaur, a life-size model of a blue whale, and the iconic Darwin Centre, which houses scientific research laboratories and specimens. The museum also offers interactive displays, hands-on activities, and educational programs for visitors of all ages. Admission to the Natural History Museum is free, although donations are encouraged to support the museum's conservation efforts and scientific research. Whether you're interested in dinosaurs, wildlife, or the history of the Earth, the Natural History Museum offers a fascinating and educational experience for visitors from around the world.",
        description:
          "World-renowned museum showcasing a vast collection of natural history specimens and exhibits.",
        priority: 21,
      },
      {
        city: "London",
        lng: "en",
        uuid: "b6865b1b-bcc7-45d1-a015-21237432228f",
        name: "Millennium Bridge",
        image: {
          credits: "Txllxt TxllxT",
          license: "https://creativecommons.org/licenses/by-sa/4.0",
        },
        location: {
          type: "Point",
          coordinates: [51.5094, -0.0985],
        },
        visit: {
          all: 0,
          outside: 60,
          schedule: [
            ["Open"],
            ["Open"],
            ["Open"],
            ["Open"],
            ["Open"],
            ["Open"],
            ["Open"],
          ],
        },
        price: 0,
        category: "Tourist attraction",
        information:
          "The Millennium Bridge, officially known as the London Millennium Footbridge, is a modern pedestrian suspension bridge spanning the River Thames in London. Opened in 2000, the bridge was designed by architects Norman Foster and Anthony Caro as part of the Millennium celebrations. The bridge connects the Tate Modern gallery on the South Bank with St. Paul's Cathedral on the north bank, providing pedestrians with a convenient and scenic route between these two iconic landmarks. The bridge's sleek and minimalist design, featuring a steel suspension structure and a slender deck, offers stunning views of the River Thames and the surrounding London skyline. Visitors to the Millennium Bridge can enjoy leisurely strolls across the river, take in panoramic views of landmarks such as the Tate Modern, Shakespeare's Globe Theatre, and the Shard, and capture memorable photos of London's iconic skyline. Whether you're a tourist exploring the city or a local out for a walk, the Millennium Bridge offers a unique and memorable experience for visitors of all ages.",
        description:
          "Modern pedestrian suspension bridge spanning the River Thames, offering scenic views of London landmarks.",
        priority: 23,
      },
      {
        city: "London",
        lng: "en",
        uuid: "60005404-7250-459e-9013-586167ceb1a6",
        name: "Oxford Street",
        image: {
          credits: "Ysangkok",
          license: "https://en.wikipedia.org/wiki/Public_domain",
        },
        location: {
          type: "Point",
          coordinates: [51.515, -0.1441],
        },
        website: "https://www.oxfordstreet.co.uk/",
        visit: {
          all: 0,
          outside: 60,
          schedule: [
            ["Open"],
            ["Open"],
            ["Open"],
            ["Open"],
            ["Open"],
            ["Open"],
            ["Open"],
          ],
        },
        price: 0,
        category: "Street",
        information:
          "Oxford Street is one of London's most famous shopping destinations, renowned for its wide range of shops, boutiques, and department stores. Stretching for approximately 1.5 miles from Marble Arch to Tottenham Court Road, the street is home to flagship stores for major retailers such as Selfridges, John Lewis, and Marks & Spencer, as well as a variety of fashion boutiques, beauty stores, and electronics shops. Oxford Street attracts millions of visitors each year, drawn by its diverse shopping options and central location in London's West End. In addition to its retail offerings, the street is known for its lively atmosphere, with street performers, musicians, and entertainers often found along the pedestrianized sections. Whether you're looking for high-end fashion, budget-friendly bargains, or unique souvenirs, Oxford Street offers a vibrant and bustling shopping experience in the heart of London.",
        description:
          "Major shopping street lined with flagship stores, department stores, and fashion boutiques.",
        priority: 24,
      },
      {
        city: "London",
        lng: "en",
        uuid: "b1bd22ee-5e70-43e2-a232-0c0c3162afab",
        name: "Madame Tussauds",
        image: {
          credits: "fotogoocom",
          license: "https://creativecommons.org/licenses/by/3.0",
        },
        location: {
          type: "Point",
          coordinates: [51.5228, -0.1547],
        },
        website: "https://www.madametussauds.com/london/en/",
        visit: {
          all: 150,
          outside: 0,
          schedule: [
            ["10:00", "16:00"],
            ["10:00", "16:00"],
            ["10:00", "16:00"],
            ["10:00", "16:00"],
            ["10:00", "16:00"],
            ["10:00", "16:00"],
            ["10:00", "16:00"],
          ],
        },
        price: 44,
        category: "Tourist attraction",
        information:
          "Madame Tussauds London is one of the most popular tourist attractions in the city, offering visitors the chance to get up close and personal with lifelike wax figures of celebrities, historical figures, and movie characters. Located in the Marylebone area of London, the museum features a diverse collection of wax figures, including actors, musicians, politicians, sports stars, and members of the royal family. Visitors to Madame Tussauds can pose for photos with their favorite celebrities, interact with interactive exhibits, and learn about the art of wax sculpting. The museum also features themed zones, such as the Marvel Superheroes 4D Experience, the Star Wars Experience, and the Spirit of London ride. Whether you're a fan of pop culture, history, or just looking for a fun day out, Madame Tussauds London offers an entertaining and memorable experience for visitors of all ages.",
        description:
          "Famous wax museum featuring lifelike figures of celebrities, historical figures, and movie characters.",
        priority: 25,
      },
      {
        city: "London",
        lng: "en",
        uuid: "064b15ad-d2f4-4440-b3c1-fee641b1c5bf",
        name: "Little Venice",
        image: {
          credits: "Uwe Aranas",
          license: "https://creativecommons.org/licenses/by-sa/4.0",
        },
        location: {
          type: "Point",
          coordinates: [51.521, -0.1836],
        },
        visit: {
          all: 0,
          outside: 120,
          schedule: [
            ["Open"],
            ["Open"],
            ["Open"],
            ["Open"],
            ["Open"],
            ["Open"],
            ["Open"],
          ],
        },
        price: 0,
        category: "Tourist attraction",
        information:
          "Little Venice is a charming and picturesque area in London, where the Grand Union and Regent's Canals meet. Known for its tranquil waterways, colorful houseboats, and waterside cafes, Little Venice offers visitors a peaceful escape from the hustle and bustle of the city. Visitors to Little Venice can enjoy leisurely walks along the canals, admiring the historic narrowboats and scenic views along the water. The area is also home to a number of cafes, restaurants, and pubs where visitors can enjoy a meal or drink with a view of the canal. In addition to its scenic beauty, Little Venice hosts a variety of events and activities throughout the year, including boat tours, floating markets, and cultural festivals. Whether you're taking a boat trip along the canals, enjoying a picnic by the water, or simply soaking up the atmosphere, Little Venice offers a delightful and relaxing experience for visitors of all ages.",
        description:
          "Picturesque area where the Grand Union and Regent's Canals meet, with houseboats and waterside cafes.",
        priority: 26,
      },
      {
        city: "London",
        lng: "en",
        uuid: "ad5d4437-738b-4a4f-aa90-306a8ee0d478",
        name: "Soho",
        image: {
          credits: "Diliff",
          license: "https://creativecommons.org/licenses/by-sa/3.0",
        },
        location: {
          type: "Point",
          coordinates: [51.5142, -0.1394],
        },
        website: "https://www.timeout.com/london/things-to-do/soho-area-guide",
        visit: {
          all: 0,
          outside: 90,
          schedule: [
            ["Open"],
            ["Open"],
            ["Open"],
            ["Open"],
            ["Open"],
            ["Open"],
            ["Open"],
          ],
        },
        price: 0,
        category: "Neighborhood",
        information:
          "Soho is a vibrant and eclectic neighborhood located in the heart of London's West End. Famous for its bustling streets, historic architecture, and diverse cultural scene, Soho has long been a magnet for artists, musicians, and creatives. Visitors can explore the neighborhood's lively streets, which are lined with an eclectic mix of shops, cafes, bars, and restaurants. Soho is also known for its vibrant nightlife, with numerous theaters, clubs, and live music venues offering entertainment late into the night. The neighborhood is home to iconic landmarks such as the Soho Square, the London Palladium, and the Ronnie Scott's Jazz Club. Additionally, Soho has a rich history, with connections to the entertainment industry, LGBTQ+ community, and immigrant communities. Whether you're seeking culinary delights, cultural experiences, or vibrant nightlife, Soho offers a dynamic and unforgettable experience in London.",
        description:
          "Lively neighborhood known for its vibrant nightlife, diverse dining scene, and cultural attractions.",
        priority: 29,
      },
      {
        city: "London",
        lng: "en",
        uuid: "42762aaf-19a3-413b-a484-424ddec4d903",
        name: "The Harry Potter Shop at Platform 9¾",
        image: {
          credits: "Matthias Süßen",
          license: "https://creativecommons.org/licenses/by/2.0",
        },
        location: {
          type: "Point",
          coordinates: [51.5322, -0.1241],
        },
        website: "https://www.harrypotterplatform934.com/",
        visit: {
          all: 0,
          outside: 90,
          schedule: [
            ["8:00", "22:00"],
            ["8:00", "22:00"],
            ["8:00", "22:00"],
            ["8:00", "22:00"],
            ["8:00", "22:00"],
            ["8:00", "22:00"],
            ["9:00", "22:00"],
          ],
        },
        price: 0,
        category: "Tourist attraction",
        information:
          "The Harry Potter Shop at Platform 9¾ is an official merchandise store located at King's Cross Station in London. Situated adjacent to the iconic Platform 9¾, where fictional characters from the Harry Potter series access the Hogwarts Express, the shop offers a wide variety of Harry Potter-themed products and souvenirs for fans of all ages. Visitors can browse through a range of merchandise, including wands, clothing, accessories, collectibles, and exclusive items inspired by the beloved wizarding world created by J.K. Rowling. The shop also features interactive displays, photo opportunities, and knowledgeable staff members who can assist with product inquiries and recommendations. Whether you're a die-hard Harry Potter fan or simply looking for a unique souvenir of your visit to London, the Harry Potter Shop at Platform 9¾ offers a magical shopping experience that captures the enchantment of the wizarding world.",
        description:
          "Official merchandise store located at King's Cross Station, offering a variety of Harry Potter-themed products and souvenirs.",
        priority: 29,
      },
      {
        city: "London",
        lng: "en",
        uuid: "74a48260-ce03-40ca-9a77-3ceca20acbcb",
        name: "Carnaby Street",
        image: {
          credits: "SisterLondon",
          license: "https://creativecommons.org/licenses/by-sa/4.0",
        },
        location: {
          type: "Point",
          coordinates: [51.5131, -0.1388],
        },
        website: "https://www.carnaby.co.uk/",
        visit: {
          all: 0,
          outside: 60,
          schedule: [
            ["10:00", "20:00"],
            ["10:00", "20:00"],
            ["10:00", "20:00"],
            ["10:00", "20:00"],
            ["10:00", "20:00"],
            ["10:00", "20:00"],
            ["12:00", "18:00"],
          ],
        },
        price: 0,
        category: "Street",
        information:
          "Carnaby Street is an iconic shopping destination located in London's West End, renowned for its trendy fashion boutiques, independent shops, and vibrant atmosphere. Originally made famous in the 1960s as the epicenter of the Swinging Sixties fashion scene, Carnaby Street continues to be a popular destination for fashionistas, trendsetters, and shoppers alike. The pedestrianized street is lined with an eclectic mix of stores, ranging from well-known brands to quirky independent boutiques, offering everything from clothing and accessories to beauty products, homeware, and gifts. In addition to its diverse shopping options, Carnaby Street is also home to a variety of cafes, restaurants, and bars, making it the perfect place to refuel and relax after a day of shopping. The street's vibrant atmosphere and unique blend of fashion, food, and culture make it a must-visit destination for anyone exploring London's West End. Whether you're hunting for the latest fashion trends, searching for unique gifts, or simply soaking up the lively atmosphere, Carnaby Street offers something for everyone to enjoy.",
        description:
          "Iconic shopping street in London's West End known for its fashion boutiques, restaurants, and vibrant atmosphere.",
        priority: 30,
      },
      {
        city: "London",
        lng: "en",
        uuid: "c901a8f4-4603-43e6-8b9f-aea9d27af41e",
        name: "The Monument",
        image: {
          credits: "Robert Lamb",
          license: "https://creativecommons.org/licenses/by-sa/2.0",
        },
        location: {
          type: "Point",
          coordinates: [51.5101, -0.0859],
        },
        website: "https://www.themonument.info/",
        visit: {
          all: 90,
          outside: 30,
          schedule: [
            ["9:30", "18:00"],
            ["9:30", "18:00"],
            ["9:30", "18:00"],
            ["9:30", "18:00"],
            ["9:30", "18:00"],
            ["9:30", "18:00"],
            ["9:30", "18:00"],
          ],
        },
        price: 6,
        category: "Monument",
        information:
          "The Monument to the Great Fire of London, commonly referred to as simply 'The Monument', is a historic structure located near the northern end of London Bridge. Designed by Sir Christopher Wren and completed in 1677, the monument was built to commemorate the Great Fire of London, which ravaged the city in 1666. Standing at 202 feet (61.5 meters) tall, the monument is the tallest isolated stone column in the world and offers visitors panoramic views of the London skyline from its viewing platform at the top. Visitors to the monument can climb the 311 steps to reach the viewing platform, where they can enjoy breathtaking views of the city and learn about the history of the Great Fire through interactive exhibits and displays. The monument also features a striking Doric column adorned with sculptures and inscriptions commemorating the rebuilding of the city after the fire. Whether you're interested in history, architecture, or simply enjoying a bird's-eye view of London, The Monument offers a unique and memorable experience for visitors of all ages.",
        description:
          "Historic monument commemorating the Great Fire of London, offering panoramic views of the city.",
        priority: 31,
      },
      {
        city: "London",
        lng: "en",
        uuid: "3d7da1fe-7eb1-4c66-b8c6-23cd13bbc90c",
        name: "Chinatown",
        image: {
          credits: "Dietmar Rabich",
          license: "https://creativecommons.org/licenses/by-sa/4.0",
        },
        location: {
          type: "Point",
          coordinates: [51.5109, -0.1317],
        },
        website: "https://chinatown.co.uk/",
        visit: {
          all: 0,
          outside: 60,
          schedule: [
            ["Open"],
            ["Open"],
            ["Open"],
            ["Open"],
            ["Open"],
            ["Open"],
            ["Open"],
          ],
        },
        price: 0,
        category: "Neighborhood",
        information:
          "Chinatown in London is a vibrant and bustling district that offers visitors a taste of authentic Chinese culture and cuisine. Located in the heart of the West End, the area is home to a wide range of Chinese restaurants, shops, markets, and cultural attractions. Visitors to Chinatown can explore the winding streets and alleyways lined with colorful lanterns, where they'll find a diverse array of dining options, from traditional Cantonese dim sum restaurants to regional specialties from across China. The area is also known for its vibrant street markets, where visitors can browse for souvenirs, trinkets, and traditional Chinese goods. Chinatown is not only a popular destination for dining and shopping but also hosts a variety of cultural events and celebrations throughout the year, including Chinese New Year festivities, lantern festivals, and dragon dances. Whether you're craving authentic Chinese cuisine, looking for unique gifts and souvenirs, or simply soaking up the lively atmosphere, Chinatown offers a vibrant and unforgettable experience for visitors of all ages.",
        description:
          "Vibrant district in London with authentic Chinese restaurants, shops, markets, and cultural events.",
        priority: 31,
      },
      {
        city: "London",
        lng: "en",
        uuid: "8d0431c1-874f-434b-80b9-fd6d9e4e192e",
        name: "Borough Market",
        image: {
          credits: "Stephen Amstrong",
          license: "https://creativecommons.org/licenses/by-sa/2.0",
        },
        location: {
          type: "Point",
          coordinates: [51.5055, -0.0906],
        },
        website: "https://boroughmarket.org.uk/",
        visit: {
          all: 0,
          outside: 120,
          schedule: [
            ["10:00", "17:00"],
            ["10:00", "17:00"],
            ["10:00", "17:00"],
            ["10:00", "17:00"],
            ["10:00", "18:00"],
            ["10:00", "17:00"],
            ["Closed"],
          ],
        },
        price: 0,
        category: "Market",
        information:
          "Borough Market is one of London's oldest and most renowned food markets, offering visitors a wide range of fresh produce, gourmet foods, and street food stalls in a vibrant and historic setting. Located in the heart of Southwark, the market has been serving customers since the 12th century and has a rich history as a hub of culinary activity in the city. Visitors to Borough Market can explore a diverse array of stalls selling everything from artisanal cheeses and charcuterie to freshly baked bread, pastries, and international street food. The market is also known for its selection of fresh fruits and vegetables, as well as specialty ingredients and spices from around the world. In addition to its food offerings, Borough Market hosts regular events, tastings, and cooking demonstrations, making it a popular destination for food enthusiasts and tourists alike. Whether you're shopping for ingredients, sampling local delicacies, or simply soaking up the lively atmosphere, Borough Market offers a unique and unforgettable culinary experience for visitors of all ages.",
        description:
          "Historic food market offering a wide range of fresh produce, gourmet foods, and street food stalls.",
        priority: 32,
      },
      {
        city: "London",
        lng: "en",
        uuid: "5673b19c-c522-4858-a0de-90a41643fe1e",
        name: "Harrods",
        image: {
          credits: "Sokkk",
          license: "https://en.wikipedia.org/wiki/Public_domain",
        },
        location: {
          type: "Point",
          coordinates: [51.4994, -0.1635],
        },
        website: "https://www.harrods.com/",
        visit: {
          all: 90,
          outside: 30,
          schedule: [
            ["10:00", "20:00"],
            ["10:00", "20:00"],
            ["10:00", "20:00"],
            ["10:00", "20:00"],
            ["10:00", "21:00"],
            ["10:00", "18:00"],
            ["11:30", "18:00"],
          ],
        },
        price: 0,
        category: "Market",
        information:
          "Harrods is an iconic department store located in Knightsbridge, London, renowned for offering a wide range of luxury goods, designer fashion, gourmet foods, and upscale services. Founded in 1834, Harrods has become synonymous with luxury shopping and attracts millions of visitors from around the world each year. Spanning over seven floors and covering over 1 million square feet of retail space, the store offers an unparalleled shopping experience, with departments dedicated to fashion, beauty, homeware, electronics, toys, and more. Harrods is also home to a number of restaurants, cafes, and food halls, where visitors can enjoy gourmet cuisine and delicacies from around the world. In addition to its retail offerings, Harrods provides a range of personalized services, including personal shopping, bespoke tailoring, and concierge services, ensuring that every visitor receives the highest level of service and attention. Whether you're browsing for luxury goods, enjoying a meal, or simply soaking in the opulent atmosphere, a visit to Harrods is a quintessential London experience.",
        description:
          "Iconic department store offering luxury goods, designer fashion, gourmet foods, and upscale services.",
        priority: 33,
      },
      {
        city: "London",
        lng: "en",
        uuid: "e146b0dd-d8ab-4a71-8654-ae92942a8f96",
        name: "M&M's World Store",
        image: {
          credits: "MaryG90",
          license: "https://creativecommons.org/licenses/by-sa/3.0",
        },
        location: {
          type: "Point",
          coordinates: [51.5106, -0.1312],
        },
        website: "https://www.mms.com/en-us/explore/mms-stores/london",
        visit: {
          all: 0,
          outside: 90,
          schedule: [
            ["10:00", "23:00"],
            ["10:00", "23:00"],
            ["10:00", "23:00"],
            ["10:00", "23:00"],
            ["10:00", "23:00"],
            ["10:00", "23:00"],
            ["12:00", "18:00"],
          ],
        },
        price: 0,
        category: "Tourist attraction",
        information:
          "M&M's World is a colorful flagship store located in the heart of London's West End, offering a wide range of M&M's-themed merchandise, souvenirs, and confections across multiple floors. Spanning over 35,000 square feet, the store features a vibrant and immersive retail experience that delights visitors of all ages. From personalized M&M's candies to apparel, accessories, home goods, and more, M&M's World offers something for every fan of the iconic chocolate candies. In addition to its extensive selection of merchandise, the store also features interactive exhibits, displays, and photo opportunities that bring the M&M's brand to life. Visitors can explore themed areas dedicated to their favorite M&M's characters, learn about the history of the brand, and create custom M&M's mixes in a rainbow of colors. Whether you're stocking up on sweet treats, searching for unique gifts, or simply indulging in a bit of chocolatey fun, M&M's World offers a memorable and delicious experience for visitors of all ages.",
        description:
          "Colorful flagship store offering M&M's-themed merchandise, souvenirs, and confections across multiple floors.",
        priority: 36,
      },
      {
        city: "London",
        lng: "en",
        uuid: "2340f510-0083-46ed-96f3-1b4e8c4fccb3",
        name: "LEGO Store",
        image: {
          credits: "Simeon87",
          license: "https://creativecommons.org/licenses/by-sa/4.0",
        },
        location: {
          type: "Point",
          coordinates: [51.5103, -0.1309],
        },
        website:
          "https://www.lego.com/en-gb/stores/store/london-leicester-square",
        visit: {
          all: 0,
          outside: 90,
          schedule: [
            ["10:00", "22:00"],
            ["10:00", "22:00"],
            ["10:00", "22:00"],
            ["10:00", "22:00"],
            ["10:00", "22:00"],
            ["10:00", "22:00"],
            ["12:00", "18:00"],
          ],
        },
        price: 0,
        category: "Tourist attraction",
        information:
          "The LEGO Store in London is an official retail destination for LEGO enthusiasts, offering a wide selection of LEGO sets, merchandise, and interactive experiences for visitors of all ages. Located in Leicester Square, the store features multiple floors filled with LEGO products, including exclusive sets, limited-edition releases, and hard-to-find collectibles. From iconic LEGO themes like LEGO City, LEGO Star Wars, and LEGO Ninjago to innovative LEGO Technic sets and LEGO Architecture kits, the store has something for every LEGO fan. In addition to its extensive selection of products, the LEGO Store offers interactive play areas, where visitors can build and create with LEGO bricks, as well as special events and activities throughout the year. Whether you're looking to add to your LEGO collection, seeking inspiration for your next build, or simply want to immerse yourself in the colorful world of LEGO, the LEGO Store in London offers a fun and memorable experience for visitors of all ages.",
        description:
          "Official LEGO store offering a wide selection of LEGO sets, merchandise, and interactive experiences.",
        priority: 37,
      },
      {
        city: "London",
        lng: "en",
        uuid: "3488ffe8-6184-49d8-a5fd-216717b64e5d",
        name: "Regent Street",
        image: {
          credits: "Clay Gregory",
          license: "https://creativecommons.org/licenses/by-sa/3.0",
        },
        location: {
          type: "Point",
          coordinates: [51.5111, -0.1388],
        },
        website: "https://www.regentstreetonline.com/",
        visit: {
          all: 0,
          outside: 60,
          schedule: [
            ["Open"],
            ["Open"],
            ["Open"],
            ["Open"],
            ["Open"],
            ["Open"],
            ["Open"],
          ],
        },
        price: 0,
        category: "Street",
        information:
          "Regent Street is one of London's most iconic shopping destinations, renowned for its elegant architecture, prestigious boutiques, and vibrant atmosphere. Stretching for approximately 1.3 miles from Oxford Circus to Piccadilly Circus, the street is lined with historic buildings adorned with ornate facades and regal columns. Regent Street is home to flagship stores for luxury brands such as Burberry, Apple, and Liberty, as well as high-street retailers, designer boutiques, and department stores. The street's wide sidewalks and pedestrianized sections make it ideal for leisurely strolls and window shopping, while its central location in London's West End ensures easy access to theaters, restaurants, and cultural attractions. Regent Street is also known for its festive decorations and seasonal events, particularly during the holiday season. Whether you're seeking high-end fashion, gourmet cuisine, or simply soaking up the vibrant atmosphere, Regent Street offers a quintessentially London shopping experience.",
        description:
          "Iconic shopping street known for its historic architecture and luxury boutiques.",
        priority: 38,
      },
      {
        city: "London",
        lng: "en",
        uuid: "110062a3-d269-4c81-9b91-fa12b65909e7",
        name: "Hamleys",
        image: {
          credits: "DAVID HOLT",
          license: "https://creativecommons.org/licenses/by-sa/2.0",
        },
        location: {
          type: "Point",
          coordinates: [51.5128, -0.1401],
        },
        website: "https://www.hamleys.com/",
        visit: {
          all: 0,
          outside: 90,
          schedule: [
            ["10:00", "20:00"],
            ["10:00", "20:00"],
            ["10:00", "20:00"],
            ["10:00", "20:00"],
            ["10:00", "20:00"],
            ["09:30", "20:00"],
            ["12:00", "18:00"],
          ],
        },
        price: 0,
        category: "Tourist attraction",
        information:
          "Hamleys is a world-famous toy store located in London's West End, offering a vast selection of toys, games, and entertainment for children of all ages. Founded in 1760, Hamleys is one of the oldest and largest toy retailers in the world, known for its iconic flagship store on Regent Street. Spanning over seven floors, the store features an extensive range of toys, including classic favorites, the latest releases, and exclusive products from top brands. From dolls and action figures to board games, puzzles, and electronic gadgets, Hamleys has something to delight every child and spark their imagination. In addition to its vast selection of toys, the store offers interactive demonstrations, live entertainment, and special events that make shopping at Hamleys a fun and memorable experience for the whole family. Whether you're browsing for the perfect gift, seeking out the latest trends, or simply enjoying a day out in London, Hamleys offers a magical and immersive world of play and discovery.",
        description:
          "World-famous toy store offering a vast selection of toys, games, and entertainment for children of all ages.",
        priority: 38,
      },
      {
        city: "London",
        lng: "en",
        uuid: "7a933383-f68c-411d-b270-b010db8f2040",
        name: "Camden Town",
        image: {
          credits: "Lewis Clark",
          license: "https://creativecommons.org/licenses/by-sa/2.0",
        },
        location: {
          type: "Point",
          coordinates: [51.5392, -0.1426],
        },
        website: "https://www.camdenmarket.com/",
        visit: {
          all: 0,
          outside: 210,
          schedule: [
            ["10:00", "19:00"],
            ["10:00", "19:00"],
            ["10:00", "19:00"],
            ["10:00", "19:00"],
            ["10:00", "19:00"],
            ["10:00", "19:00"],
            ["10:00", "19:00"],
          ],
        },
        price: 0,
        category: "Neighborhood",
        information:
          "Camden Town is a vibrant district in North London known for its eclectic market, alternative fashion, and lively atmosphere. Camden Market is one of the largest and most diverse markets in London, offering a wide range of stalls selling everything from vintage clothing and handmade crafts to international street food and antiques. Beyond the market, Camden Town is also famous for its music venues, street art, and diverse cultural scene. Visitors can explore the iconic Camden Lock, stroll along the Regent's Canal, or immerse themselves in the area's bohemian charm. Whether you're a fashion enthusiast, foodie, or music lover, Camden Town offers a unique and unforgettable experience.",
        description:
          "Eclectic market known for its alternative fashion and vibrant atmosphere.",
        priority: 40,
      },
      {
        city: "London",
        lng: "en",
        uuid: "3a62daea-b751-4f6a-980c-c7e15d210851",
        name: "The Shard",
        image: {
          credits: "Colin",
          license: "https://creativecommons.org/licenses/by-sa/4.0",
        },
        location: {
          type: "Point",
          coordinates: [51.5045, -0.0857],
        },
        website: "https://www.the-shard.com/",
        visit: {
          all: 90,
          outside: 0,
          schedule: [
            ["10:00", "22:00"],
            ["10:00", "22:00"],
            ["10:00", "22:00"],
            ["10:00", "22:00"],
            ["10:00", "22:00"],
            ["10:00", "22:00"],
            ["10:00", "22:00"],
          ],
        },
        price: 38,
        category: "Tourist attraction",
        information:
          "The Shard is an iconic skyscraper located in the heart of London, offering breathtaking panoramic views of the city skyline. Standing at a height of 310 meters (1,017 feet), it is the tallest building in the United Kingdom and has become a prominent feature of the London skyline since its completion in 2012. Visitors can ascend to the building's observation deck, known as The View from The Shard, which offers 360-degree views of London from an altitude of over 200 meters (800 feet). On a clear day, visibility can extend for up to 40 miles, allowing visitors to see landmarks such as the Tower Bridge, St Paul's Cathedral, and the River Thames. The Shard also houses a variety of restaurants, bars, and luxury hotels, making it a popular destination for both tourists and locals alike. Whether you're admiring the views, enjoying a meal, or simply marveling at the architectural feat, a visit to The Shard promises an unforgettable experience in London.",
        description:
          "Iconic skyscraper offering panoramic views of London from its observation deck.",
        priority: 40,
      },
      {
        city: "London",
        lng: "en",
        uuid: "b69f3980-4e79-43a3-bf5b-07c6d73efc26",
        name: "St Dunstan in the East",
        image: {
          credits: "Mx. Granger",
          license: "https://en.wikipedia.org/wiki/Public_domain",
        },
        location: {
          type: "Point",
          coordinates: [51.5096, -0.0825],
        },
        website:
          "https://www.cityoflondon.gov.uk/things-to-do/city-gardens/find-a-garden/st-dunstan-in-the-east-church-garden",
        visit: {
          all: 60,
          outside: 0,
          schedule: [
            ["08:00", "17:00"],
            ["08:00", "17:00"],
            ["08:00", "17:00"],
            ["08:00", "17:00"],
            ["08:00", "17:00"],
            ["08:00", "17:00"],
            ["08:00", "17:00"],
          ],
        },
        price: 0,
        category: "Park",
        information:
          "St Dunstan in the East is a historic church located in the heart of London that has been transformed into a tranquil garden oasis. Originally built in the 12th century, the church was severely damaged during the Great Fire of London in 1666 and again during the Blitz in World War II. Rather than being fully restored, the ruins of the church were preserved and transformed into a public garden, creating a peaceful and contemplative space amidst the bustling city streets. Visitors to St Dunstan in the East can explore the ivy-covered ruins of the church, which provide a picturesque backdrop for relaxation, reflection, and photography. The garden is filled with lush greenery, colorful flowers, and winding pathways, making it an ideal spot for a leisurely stroll or a quiet escape from the hustle and bustle of city life. Whether you're seeking a moment of tranquility, a scenic spot for a picnic, or simply a unique and historic attraction to explore, St Dunstan in the East offers a peaceful retreat in the heart of London.",
        description:
          "Historic church ruins transformed into a tranquil garden oasis in the heart of London.",
        priority: 43,
      },
      {
        city: "London",
        lng: "en",
        uuid: "ae28f4c8-2f68-495e-b94e-889f35eb730b",
        name: "Covent Garden",
        image: {
          credits: "Ank Kumar",
          license: "https://creativecommons.org/licenses/by-sa/4.0",
        },
        location: {
          type: "Point",
          coordinates: [51.512, -0.1227],
        },
        website: "https://coventgarden.london/",
        visit: {
          all: 0,
          outside: 60,
          schedule: [
            ["10:00", "20:00"],
            ["10:00", "20:00"],
            ["10:00", "20:00"],
            ["10:00", "20:00"],
            ["10:00", "20:00"],
            ["10:00", "20:00"],
            ["11:00", "18:00"],
          ],
        },
        price: 0,
        category: "Market",
        information:
          "Covent Garden is a vibrant and historic district located in the heart of London's West End. Once a thriving fruit and vegetable market, the area is now known for its eclectic mix of shops, restaurants, bars, and cultural attractions. Visitors to Covent Garden can explore the historic market buildings, which are home to a variety of boutique shops, artisanal stalls, and gourmet food vendors. The district is also known for its lively street performers, who entertain visitors with music, magic, and theatrical performances throughout the day. Covent Garden is a popular destination for dining and nightlife, with numerous restaurants, cafes, and bars offering a wide range of cuisines and atmospheres. In addition to its shopping and dining options, Covent Garden is home to several cultural attractions, including the Royal Opera House and the London Transport Museum. Whether you're browsing the market stalls, enjoying a meal al fresco, or taking in a world-class performance, Covent Garden offers a unique and vibrant experience in the heart of London.",
        description:
          "Historic market district with shops, restaurants, street performers, and cultural attractions.",
        priority: 47,
      },
      {
        city: "London",
        lng: "en",
        uuid: "d7ebed78-9f99-47c7-b862-a3eb33489735",
        name: "Hyde Park",
        image: {
          credits: "Purplepupil",
          license: "https://creativecommons.org/licenses/by-sa/4.0",
        },
        location: {
          type: "Point",
          coordinates: [51.5074, -0.1662],
        },
        website: "https://www.royalparks.org.uk/parks/hyde-park",
        visit: {
          all: 0,
          outside: 180,
          schedule: [
            ["Open"],
            ["Open"],
            ["Open"],
            ["Open"],
            ["Open"],
            ["Open"],
            ["Open"],
          ],
        },
        price: 0,
        category: "Park",
        information:
          "Hyde Park is one of London's most famous parks, covering 350 acres and offering a peaceful retreat from the hustle and bustle of the city. Visitors can enjoy leisurely walks, picnics, boating on the Serpentine lake, or simply relaxing in the vast green spaces. The park is also home to various monuments and landmarks, including the Diana, Princess of Wales Memorial Fountain, the Serpentine Galleries, and the iconic Speaker's Corner. Throughout the year, Hyde Park hosts numerous events and concerts, attracting visitors from all over the world. Whether you're looking for outdoor recreation, cultural experiences, or simply a place to unwind, Hyde Park has something for everyone.",
        description:
          "Iconic park offering vast green spaces and recreational activities.",
        priority: 50,
      },
      {
        city: "London",
        lng: "en",
        uuid: "f51d09fb-1ba1-48cf-b9cf-ae8a2f256a24",
        name: "St James's Park",
        image: {
          credits: "Colin",
          license: "https://creativecommons.org/licenses/by-sa/3.0",
        },
        location: {
          type: "Point",
          coordinates: [51.5027, -0.1339],
        },
        website: "https://www.royalparks.org.uk/parks/st-jamess-park",
        visit: {
          all: 0,
          outside: 90,
          schedule: [
            ["Open"],
            ["Open"],
            ["Open"],
            ["Open"],
            ["Open"],
            ["Open"],
            ["Open"],
          ],
        },
        price: 0,
        category: "Park",
        information:
          "St James's Park is a scenic park located in the heart of London, adjacent to Buckingham Palace. Covering 23 hectares, it is the oldest of the royal parks in London and offers visitors a tranquil escape from the bustling city streets. The park features a beautiful lake, home to a variety of waterfowl including pelicans, as well as lush green spaces, flower beds, and tree-lined avenues. Visitors can enjoy leisurely strolls along the paths, relax on the lawns, or admire iconic views of Buckingham Palace and the Horse Guards Parade. St James's Park is also known for its charming pelicans, which have been a resident feature since the mid-17th century. Whether you're looking for a peaceful retreat or a picturesque backdrop for a leisurely walk, St James's Park offers a delightful experience for visitors of all ages.",
        description:
          "Scenic park with a lake, wildlife, and iconic views of Buckingham Palace.",
        priority: 50,
      },
      {
        city: "London",
        lng: "en",
        uuid: "38574046-6d08-4fdb-9765-fb4c115b2595",
        name: "Science Museum",
        image: {
          credits: "Shadowssettle",
          license: "https://creativecommons.org/licenses/by-sa/4.0",
        },
        location: {
          type: "Point",
          coordinates: [51.4974, -0.1742],
        },
        website: "https://www.sciencemuseum.org.uk/",
        visit: {
          all: 180,
          outside: 0,
          schedule: [
            ["10:00", "18:00"],
            ["10:00", "18:00"],
            ["10:00", "18:00"],
            ["10:00", "18:00"],
            ["10:00", "18:00"],
            ["10:00", "18:00"],
            ["10:00", "18:00"],
          ],
        },
        price: 0,
        category: "Museum",
        information:
          "The Science Museum in London is a world-renowned institution dedicated to exploring the wonders of science, technology, engineering, and mathematics (STEM). Located in South Kensington, the museum offers visitors a diverse range of interactive exhibits, hands-on experiences, and immersive displays that showcase the latest developments in scientific research and innovation. From space exploration and robotics to medicine and climate change, the Science Museum covers a wide range of topics and disciplines, making it a fascinating destination for visitors of all ages. Highlights of the museum include the Wonderlab: The Equinor Gallery, an interactive gallery where visitors can engage with scientific phenomena and experiments, and the Flight Gallery, which features historic aircraft and exhibits on the history of aviation. The museum also hosts regular events, workshops, and demonstrations, as well as temporary exhibitions on cutting-edge scientific topics. Whether you're a budding scientist, a curious explorer, or simply looking for a fun and educational day out, the Science Museum offers something for everyone to enjoy.",
        description:
          "Interactive museum exploring the world of science, technology, engineering, and mathematics (STEM).",
        priority: 51,
      },
      {
        city: "London",
        lng: "en",
        uuid: "5b0a226d-9063-44b7-9860-5a2561c4950b",
        name: "Leicester Square",
        image: {
          credits: "DiscoA340",
          license: "https://creativecommons.org/licenses/by-sa/4.0",
        },
        location: {
          type: "Point",
          coordinates: [51.5103, -0.1301],
        },
        website: "https://www.leicestersquare.london/",
        visit: {
          all: 0,
          outside: 30,
          schedule: [
            ["Open"],
            ["Open"],
            ["Open"],
            ["Open"],
            ["Open"],
            ["Open"],
            ["Open"],
          ],
        },
        price: 0,
        category: "Tourist attraction",
        information:
          "Leicester Square is a bustling public square located in London's West End, renowned for its vibrant atmosphere and plethora of entertainment options. The square is surrounded by theaters, cinemas, restaurants, and bars, making it a popular destination for locals and tourists alike. Leicester Square is perhaps best known for hosting movie premieres and red carpet events, with its iconic Odeon cinema and neighboring theaters frequently playing host to Hollywood blockbusters and star-studded premieres. In addition to its entertainment venues, Leicester Square is also home to several statues and sculptures, including a statue of William Shakespeare, and is adorned with beautiful floral displays throughout the year. Visitors to Leicester Square can enjoy leisurely strolls, people-watching, or catch a live performance from one of the many street entertainers who frequent the area. Whether you're seeking world-class entertainment, delicious cuisine, or simply soaking up the lively atmosphere, Leicester Square offers something for everyone to enjoy.",
        description:
          "Iconic square in London's West End, known for its theaters, cinemas, restaurants, and entertainment venues.",
        priority: 56,
      },
      {
        city: "London",
        lng: "en",
        uuid: "cfc5f436-a9ac-4f77-b7b8-c880885036f7",
        name: "Victoria and Albert Museum",
        image: {
          credits: "Diliff",
          license: "https://creativecommons.org/licenses/by-sa/3.0",
        },
        location: {
          type: "Point",
          coordinates: [51.4966, -0.1722],
        },
        website: "https://www.vam.ac.uk/",
        visit: {
          all: 180,
          outside: 30,
          schedule: [
            ["10:00", "17:45"],
            ["10:00", "17:45"],
            ["10:00", "17:45"],
            ["10:00", "17:45"],
            ["10:00", "22:00"],
            ["10:00", "17:45"],
            ["10:00", "17:45"],
          ],
        },
        price: 0,
        category: "Museum",
        information:
          "The Victoria and Albert Museum, often abbreviated as the V&A, is the world's largest museum of applied and decorative arts and design, housing a vast collection of objects that span over 5,000 years of human creativity. Located in the South Kensington area of London, the museum's extensive collection includes art and design objects from a wide range of cultures and periods, including ceramics, textiles, furniture, fashion, sculpture, and photography. Highlights of the museum's collection include the British Galleries, which showcase the history of British design from the Tudor period to the present day, and the Cast Courts, which feature full-scale replicas of famous sculptures and architectural elements from around the world. In addition to its permanent collection, the V&A also hosts temporary exhibitions, educational programs, and special events throughout the year. Whether you're interested in art, design, or history, the Victoria and Albert Museum offers a rich and immersive cultural experience for visitors of all ages.",
        description:
          "World's largest museum of applied and decorative arts and design, with a collection spanning over 5,000 years of human creativity.",
        priority: 58,
      },
      {
        city: "London",
        lng: "en",
        uuid: "85193bfa-3fbd-4fdb-aeb9-cb519d3dc5ce",
        name: "Notting Hill",
        image: {
          credits: "Chris Whippet",
          license: "https://creativecommons.org/licenses/by-sa/2.0",
        },
        location: {
          type: "Point",
          coordinates: [51.517, -0.2059],
        },
        visit: {
          all: 0,
          outside: 150,
          schedule: [
            ["8:00", "19:00"],
            ["8:00", "19:00"],
            ["8:00", "19:00"],
            ["8:00", "19:00"],
            ["8:00", "19:00"],
            ["8:00", "19:00"],
            ["8:00", "17:00"],
          ],
        },
        price: 0,
        category: "Neighborhood",
        information:
          "Notting Hill is a vibrant and eclectic neighborhood located in the Royal Borough of Kensington and Chelsea. Famous for its colorful houses, quaint streets, and lively atmosphere, Notting Hill has become a popular destination for tourists and locals alike. Visitors can explore the bustling Portobello Road Market, which offers a wide range of antiques, vintage clothing, and street food stalls. The neighborhood is also known for its annual Notting Hill Carnival, Europe's largest street festival celebrating Caribbean culture and heritage. In addition to its markets and festivals, Notting Hill boasts charming cafes, boutique shops, and beautiful garden squares. Whether you're strolling through the picturesque streets, browsing the markets, or enjoying the vibrant cultural scene, Notting Hill offers a unique and memorable experience in London.",
        description:
          "Vibrant neighborhood known for its colorful houses, eclectic shops, and lively markets.",
        priority: 60,
      },
      {
        city: "London",
        lng: "en",
        uuid: "ff13aa41-4d62-4c2e-9ab0-5f157762569f",
        name: "Regent's Park",
        image: {
          credits: "Tom Page",
          license: "https://creativecommons.org/licenses/by-sa/2.0",
        },
        location: {
          type: "Point",
          coordinates: [51.5278, -0.1536],
        },
        website: "https://www.royalparks.org.uk/parks/the-regents-park",
        visit: {
          all: 0,
          outside: 120,
          schedule: [
            ["5:00", "18:00"],
            ["5:00", "18:00"],
            ["5:00", "18:00"],
            ["5:00", "18:00"],
            ["5:00", "18:00"],
            ["5:00", "18:00"],
            ["5:00", "18:00"],
          ],
        },
        price: 0,
        category: "Park",
        information:
          "Regent's Park is one of London's most iconic green spaces, offering visitors a tranquil escape from the hustle and bustle of the city. Spanning 395 acres in the heart of London, the park is renowned for its beautiful gardens, wide-open lawns, and recreational facilities. Visitors to Regent's Park can explore a variety of attractions, including the stunning Queen Mary's Gardens, which showcase vibrant floral displays and over 12,000 roses. The park also features sports facilities such as tennis courts, a boating lake, and children's playgrounds, making it a popular destination for outdoor recreation and leisure activities. Additionally, Regent's Park is home to the world-famous London Zoo, which houses a diverse collection of animals from around the globe. Whether you're taking a leisurely stroll, enjoying a picnic, or visiting the zoo, Regent's Park offers something for everyone to enjoy amidst its picturesque surroundings.",
        description:
          "Expansive public park featuring gardens, sports facilities, a lake, and London Zoo.",
        priority: 67,
      },
      {
        city: "London",
        lng: "en",
        uuid: "d8170bf8-9fb5-4e41-9f39-87252076637e",
        name: "The Making of Harry Potter",
        image: {
          credits: "Ank Kumar",
          license: "https://creativecommons.org/licenses/by-sa/4.0",
        },
        location: {
          type: "Point",
          coordinates: [51.6906, -0.4207],
        },
        website: "https://www.wbstudiotour.co.uk/",
        visit: {
          all: 240,
          outside: 0,
          schedule: [
            ["9:00", "10:00"],
            ["9:00", "10:00"],
            ["9:00", "10:00"],
            ["9:00", "10:00"],
            ["9:00", "10:00"],
            ["9:00", "10:00"],
            ["9:00", "10:00"],
          ],
        },
        price: 145,
        category: "Tourist attraction",
        information:
          "Warner Bros. Studio Tour London - The Making of Harry Potter offers fans of the beloved book and film series the chance to step behind the scenes and explore the magical world of Hogwarts. Located in Leavesden, just outside of London, the studio tour takes visitors on an immersive journey through the making of the iconic film franchise. Highlights of the tour include sets such as the Great Hall, Diagon Alley, and Platform 9¾, as well as props, costumes, and special effects used in the films. Visitors can also learn about the filmmaking process, from script to screen, and see firsthand the craftsmanship and attention to detail that went into bringing J.K. Rowling's magical world to life. The studio tour offers a variety of ticket options, including standard admission, guided tours, and special events. Whether you're a die-hard Harry Potter fan or simply curious about the magic behind the movies, Warner Bros. Studio Tour London offers an enchanting and unforgettable experience for visitors of all ages.",
        description:
          "Interactive tour showcasing sets, props, and costumes from the Harry Potter film series.",
        priority: 70,
      },
      {
        city: "London",
        lng: "en",
        uuid: "1f7eb542-9a74-4396-847e-ae13e06a45ca",
        name: "Shakespeare's Globe",
        image: {
          credits: "Diego Delso",
          license: "https://creativecommons.org/licenses/by-sa/2.0",
        },
        location: {
          type: "Point",
          coordinates: [51.5081, -0.0971],
        },
        website: "https://www.shakespearesglobe.com/",
        visit: {
          all: 120,
          outside: 30,
          schedule: [
            ["10:00", "17:00"],
            ["10:00", "17:00"],
            ["10:00", "17:00"],
            ["10:00", "17:00"],
            ["10:00", "17:00"],
            ["10:00", "17:00"],
            ["10:00", "17:00"],
          ],
        },
        price: 34,
        category: "Tourist attraction",
        information:
          "Shakespeare's Globe is a reconstruction of the historic Globe Theatre, where many of William Shakespeare's plays were originally performed. Located on the South Bank of the River Thames, the Globe Theatre offers visitors a unique opportunity to experience Shakespearean drama in an authentic Elizabethan setting. The theatre's wooden O-shaped structure and open-air design provide an immersive and intimate theatrical experience, allowing audiences to connect with the language and spirit of Shakespeare's plays as they were meant to be experienced. In addition to performances of Shakespeare's works, the Globe offers guided tours of the theatre, exhibitions on Elizabethan theatre and culture, and educational programs for students and teachers. Visitors to the Globe can also explore the nearby Globe Exhibition, which showcases artefacts and memorabilia related to the theatre's history and the life of William Shakespeare. Whether you're a theatre enthusiast, a history buff, or simply curious about Shakespearean drama, Shakespeare's Globe offers a captivating and memorable experience for visitors of all ages.",
        description:
          "Reconstruction of the historic Globe Theatre, offering guided tours, performances, and exhibitions.",
        priority: 73,
      },
      {
        city: "London",
        lng: "en",
        uuid: "db2345da-5402-49dc-87d9-918baccbeb69",
        name: "Museum of London",
        image: {
          credits: "Ethan Doyle White",
          license: "https://creativecommons.org/licenses/by-sa/4.0",
        },
        location: {
          type: "Point",
          coordinates: [51.5176, -0.0967],
        },
        website: "https://www.museumoflondon.org.uk/",
        visit: {
          all: 150,
          outside: 0,
          schedule: [
            ["10:00", "18:00"],
            ["10:00", "18:00"],
            ["10:00", "18:00"],
            ["10:00", "18:00"],
            ["10:00", "18:00"],
            ["10:00", "18:00"],
            ["10:00", "18:00"],
          ],
        },
        price: 0,
        category: "Museum",
        information:
          "The Museum of London is dedicated to exploring the history and culture of London, from its prehistoric origins to the present day. Located in the City of London, the museum offers visitors a comprehensive overview of the capital's rich and diverse history through a wide range of exhibits, artifacts, and interactive displays. The museum's permanent galleries cover various aspects of London life, including its Roman roots, medieval period, Tudor and Stuart eras, Victorian era, and the modern city. Visitors can explore reconstructed street scenes, archaeological finds, historical objects, and multimedia presentations that bring London's past to life. In addition to its permanent collections, the Museum of London also hosts temporary exhibitions, educational programs, and events that delve deeper into specific aspects of London's history and culture. Whether you're a history buff, a Londoner curious about your city's past, or a visitor keen to learn more about the capital, the Museum of London offers a fascinating and informative experience for all.",
        description:
          "Museum exploring the history and culture of London, from prehistoric times to the present day.",
        priority: 75,
      },
      {
        city: "London",
        lng: "en",
        uuid: "2882fef2-4008-4896-9702-17b22b671cc2",
        name: "HMS Belfast",
        image: {
          credits: "Alvesgaspar",
          license: "https://creativecommons.org/licenses/by-sa/3.0",
        },
        location: {
          type: "Point",
          coordinates: [51.5065, -0.08139],
        },
        website: "https://www.iwm.org.uk/visits/hms-belfast",
        visit: {
          all: 90,
          outside: 30,
          schedule: [
            ["10:00", "17:00"],
            ["10:00", "17:00"],
            ["10:00", "17:00"],
            ["10:00", "17:00"],
            ["10:00", "17:00"],
            ["10:00", "17:00"],
            ["10:00", "17:00"],
          ],
        },
        price: 23,
        category: "Tourist attraction",
        information:
          "HMS Belfast is a historic warship and museum located on the River Thames in London. Launched in 1938, the HMS Belfast served in World War II and the Korean War before being decommissioned in 1963. Today, the ship is preserved as a museum and offers visitors the opportunity to explore its decks, engine rooms, and gun turrets, providing a fascinating glimpse into naval history and life onboard a warship. Visitors to HMS Belfast can take guided tours led by knowledgeable staff who share stories and insights about the ship's wartime experiences and the daily lives of its crew. The museum also features interactive exhibits, displays on naval technology and strategy, and collections of artifacts related to the ship's history. From the cramped quarters of the crew to the commanding views from the ship's decks, HMS Belfast offers a unique and immersive experience that brings the story of Britain's naval heritage to life.",
        description:
          "Former Royal Navy cruiser turned museum ship, offering guided tours and exhibits on naval history.",
        priority: 76,
      },
      {
        city: "London",
        lng: "en",
        uuid: "2d5f72eb-22da-48d8-93c8-798b461583fc",
        name: "British Museum",
        image: {
          credits: "Ham",
          license: "https://creativecommons.org/licenses/by-sa/3.0",
        },
        location: {
          type: "Point",
          coordinates: [51.5194, -0.1276],
        },
        website: "https://www.britishmuseum.org/",
        visit: {
          all: 180,
          outside: 0,
          schedule: [
            ["10:00", "17:00"],
            ["10:00", "17:00"],
            ["10:00", "17:00"],
            ["10:00", "17:00"],
            ["10:00", "17:00"],
            ["10:00", "17:00"],
            ["10:00", "17:00"],
          ],
        },
        price: 0,
        category: "Museum",
        information:
          "The British Museum is one of the world's largest and most comprehensive museums, housing a vast collection of art and artifacts from across the globe. Founded in 1753, the museum's permanent collection spans over two million years of history, including objects from ancient Egypt, Greece, Rome, Asia, Africa, and the Americas. Highlights of the museum's collection include the Rosetta Stone, the Elgin Marbles, and the Egyptian mummies. Visitors can explore galleries dedicated to archaeology, anthropology, and world cultures, as well as temporary exhibitions featuring contemporary art and cultural heritage. Admission to the British Museum is free, although donations are encouraged to support the museum's preservation efforts and educational programs. Whether you're an art enthusiast, history buff, or simply curious about the world, the British Museum offers a rich and immersive cultural experience.",
        description:
          "World-renowned museum showcasing art and artifacts from ancient and contemporary cultures.",
        priority: 80,
      },
      {
        city: "London",
        lng: "en",
        uuid: "994a8247-8253-4735-84a4-e9375e411a4d",
        name: "National Gallery",
        image: {
          credits: "Diego Delso",
          license: "https://creativecommons.org/licenses/by-sa/4.0",
        },
        location: {
          type: "Point",
          coordinates: [51.5088, -0.1283],
        },
        website: "https://www.nationalgallery.org.uk/",
        visit: {
          all: 210,
          outside: 30,
          schedule: [
            ["10:00", "18:00"],
            ["10:00", "18:00"],
            ["10:00", "18:00"],
            ["10:00", "18:00"],
            ["10:00", "21:00"],
            ["10:00", "18:00"],
            ["10:00", "18:00"],
          ],
        },
        price: 0,
        category: "Museum",
        information:
          "The National Gallery in London is one of the world's premier art museums, housing a rich collection of Western European paintings from the 13th to the 19th centuries. Located in Trafalgar Square, the museum's impressive collection includes works by some of the most renowned artists in history, including Leonardo da Vinci, Vincent van Gogh, Rembrandt, and Michelangelo. Visitors to the National Gallery can explore a diverse range of artistic styles and periods, from medieval religious paintings to Renaissance masterpieces to Impressionist landscapes. In addition to its permanent collection, the museum also hosts temporary exhibitions, lectures, and events throughout the year. With its stunning architecture, world-class collection, and central location, the National Gallery offers a unique and enriching cultural experience for visitors of all ages.",
        description:
          "Art museum housing a rich collection of Western European paintings from the 13th to the 19th centuries.",
        priority: 87,
      },
      {
        city: "London",
        lng: "en",
        uuid: "37348067-b671-4733-971c-7edf0bcde6a2",
        name: "Tate Britain",
        image: {
          credits: "Julian Herzog",
          license: "https://creativecommons.org/licenses/by/4.0",
        },
        location: {
          type: "Point",
          coordinates: [51.491, -0.1278],
        },
        website: "https://www.tate.org.uk/visit/tate-britain",
        visit: {
          all: 150,
          outside: 0,
          schedule: [
            ["10:00", "18:00"],
            ["10:00", "18:00"],
            ["10:00", "18:00"],
            ["10:00", "18:00"],
            ["10:00", "18:00"],
            ["10:00", "18:00"],
            ["10:00", "18:00"],
          ],
        },
        price: 0,
        category: "Museum",
        information:
          "Tate Britain is an art museum located in London that houses the national collection of British art from 1500 to the present day. Situated on the banks of the River Thames in the Millbank area of London, the museum offers visitors a comprehensive survey of British art, with works spanning a wide range of periods, styles, and genres. The museum's permanent collection includes paintings, sculptures, drawings, prints, and other works of art by some of Britain's most celebrated artists, including J.M.W. Turner, William Hogarth, John Constable, and William Blake. Tate Britain also hosts temporary exhibitions and displays that explore specific themes, movements, or artists within the broader context of British art history. In addition to its galleries, the museum offers a variety of amenities and facilities, including cafes, shops, and educational programs for visitors of all ages. Whether you're a seasoned art lover or simply curious about British art and culture, Tate Britain offers a rich and rewarding experience that celebrates the diversity and creativity of the British artistic tradition.",
        description:
          "Art museum housing the national collection of British art from 1500 to the present day.",
        priority: 88,
      },
      {
        city: "London",
        lng: "en",
        uuid: "48b3ba47-23bd-4645-a66c-8f2d26188491",
        name: "Piccadilly Circus",
        image: {
          credits: "Jimmy Baikovicius",
          license: "https://creativecommons.org/licenses/by-sa/2.0",
        },
        location: {
          type: "Point",
          coordinates: [51.5101, -0.1342],
        },
        visit: {
          all: 0,
          outside: 60,
          schedule: [
            ["Open"],
            ["Open"],
            ["Open"],
            ["Open"],
            ["Open"],
            ["Open"],
            ["Open"],
          ],
        },
        price: 12,
        category: "Tourist attraction",
        information:
          "Piccadilly Circus is a famous public space and junction located in London's West End. It is known for its iconic neon signs, bustling atmosphere, and proximity to major attractions such as the Shaftesbury Memorial Fountain and the Criterion Theatre. Piccadilly Circus is surrounded by theaters, shops, and restaurants, making it a popular destination for tourists and locals alike. Visitors can enjoy the vibrant energy of the area, take photos with the famous signs, or simply relax and people-watch. Piccadilly Circus is also a transportation hub, with several bus routes and the Piccadilly and Bakerloo tube lines intersecting here. Whether you're exploring London's nightlife, shopping for souvenirs, or just soaking in the city's atmosphere, Piccadilly Circus is a must-visit destination.",
        description:
          "Iconic junction and public space known for its neon signs and bustling atmosphere.",
        priority: 90,
      },
      {
        city: "London",
        lng: "en",
        uuid: "1266fba4-5f18-43e4-820a-fc6e55a2cd69",
        name: "Royal Albert Hall",
        image: {
          credits: "Diliff",
          license: "https://creativecommons.org/licenses/by-sa/3.0",
        },
        location: {
          type: "Point",
          coordinates: [51.5009, -0.1775],
        },
        website: "https://www.royalalberthall.com/",
        visit: {
          all: 180,
          outside: 30,
          schedule: [
            ["10:00", "16:00"],
            ["10:00", "16:00"],
            ["10:00", "16:00"],
            ["10:00", "16:00"],
            ["10:00", "16:00"],
            ["10:00", "16:00"],
            ["10:00", "16:00"],
          ],
        },
        price: 24,
        category: "Monument",
        information:
          "The Royal Albert Hall is one of London's most iconic concert venues, renowned for its distinctive circular architecture and prestigious events. Opened in 1871 by Queen Victoria in memory of her beloved husband, Prince Albert, the hall has hosted countless performances by world-renowned artists, orchestras, and performers. The venue's diverse program includes classical music concerts, rock and pop performances, ballet and dance productions, film screenings, and cultural events. The Royal Albert Hall is also home to the BBC Proms, an annual summer festival of classical music featuring performances by leading orchestras and soloists. In addition to its main auditorium, the hall houses several smaller performance spaces, including the Elgar Room and the Verdi Room, which host intimate concerts and events. Whether you're attending a concert, taking a guided tour, or simply admiring the iconic architecture, a visit to the Royal Albert Hall promises a memorable cultural experience in the heart of London.",
        description:
          "Iconic concert hall hosting a wide range of music, dance, and cultural events.",
        priority: 95,
      },
      {
        city: "London",
        lng: "en",
        uuid: "a2406fc9-38cf-4a3f-a06b-96103f4dbc0a",
        name: "Tate Modern",
        image: {
          credits: "King of Hearts",
          license: "https://creativecommons.org/licenses/by-sa/4.0",
        },
        location: {
          type: "Point",
          coordinates: [51.5076, -0.1005],
        },
        website: "https://www.tate.org.uk/visit/tate-modern",
        visit: {
          all: 180,
          outside: 0,
          schedule: [
            ["10:00", "18:00"],
            ["10:00", "18:00"],
            ["10:00", "18:00"],
            ["10:00", "18:00"],
            ["10:00", "18:00"],
            ["10:00", "18:00"],
            ["10:00", "18:00"],
          ],
        },
        price: 0,
        category: "Museum",
        information:
          "Tate Modern is one of the world's premier museums of modern and contemporary art, housed in a striking building that was once a power station on the banks of the River Thames. Located in the heart of London's cultural district, the museum is renowned for its extensive collection of works by some of the most important modern and contemporary artists of the 20th and 21st centuries. Visitors to Tate Modern can explore a diverse range of artworks spanning various mediums, styles, and movements, from painting and sculpture to photography, video, and installation art. The museum's permanent collection includes iconic works by artists such as Pablo Picasso, Salvador Dalí, Andy Warhol, and Louise Bourgeois, as well as rotating exhibitions and special installations that showcase the latest developments in contemporary art. In addition to its galleries, Tate Modern offers a variety of amenities and facilities, including cafes, shops, and educational programs for visitors of all ages. Whether you're an art enthusiast, a casual visitor, or simply looking for a unique cultural experience, Tate Modern offers something for everyone to enjoy.",
        description:
          "Contemporary art museum housed in a former power station, featuring works by modern and contemporary artists.",
        priority: 98,
      },
      {
        city: "London",
        lng: "en",
        uuid: "de0eb6b4-faab-492c-986e-305757d6a8e7",
        name: "Sherlock Holmes Museum",
        image: {
          credits: "Cezary p",
          license: "https://creativecommons.org/licenses/by-sa/2.0",
        },
        location: {
          type: "Point",
          coordinates: [51.5237, -0.1585],
        },
        website: "https://www.sherlock-holmes.co.uk/",
        visit: {
          all: 90,
          outside: 0,
          schedule: [
            ["9:30", "18:00"],
            ["9:30", "18:00"],
            ["9:30", "18:00"],
            ["9:30", "18:00"],
            ["9:30", "18:00"],
            ["9:30", "18:00"],
            ["9:30", "18:00"],
          ],
        },
        price: 19,
        category: "Museum",
        information:
          "The Sherlock Holmes Museum is a dedicated museum located at 221B Baker Street in London, showcasing the life and work of Sherlock Holmes, the fictional detective created by Sir Arthur Conan Doyle. Housed in a Victorian townhouse that closely resembles the fictional detective's famous address, the museum offers visitors a chance to step back in time and immerse themselves in the world of Sherlock Holmes and his loyal companion Dr. John Watson. The museum's meticulously recreated rooms feature period furnishings, artifacts, and memorabilia related to Sherlock Holmes and the stories in which he appears, allowing visitors to experience the atmosphere of Victorian London and the adventures of literature's most famous detective. From the famous study to Dr. Watson's bedroom and Mrs. Hudson's kitchen, the museum offers a unique and immersive experience for fans of Sherlock Holmes and Victorian literature alike.",
        description:
          "Dedicated museum showcasing the life and work of Sherlock Holmes, the fictional detective created by Sir Arthur Conan Doyle.",
        priority: 99,
      },
      {
        city: "London",
        lng: "en",
        uuid: "bca07e1e-b420-4697-81b1-afc3a0cf28be",
        name: "ZSL London Zoo",
        image: {
          credits: "Heather Smithers",
          license: "https://creativecommons.org/licenses/by-sa/2.0",
        },
        location: {
          type: "Point",
          coordinates: [51.5352, -0.1546],
        },
        website: "https://www.zsl.org/zsl-london-zoo",
        visit: {
          all: 240,
          outside: 0,
          schedule: [
            ["10:00", "16:00"],
            ["10:00", "16:00"],
            ["10:00", "16:00"],
            ["10:00", "16:00"],
            ["10:00", "16:00"],
            ["10:00", "16:00"],
            ["10:00", "16:00"],
          ],
        },
        price: 40,
        category: "Tourist attraction",
        information:
          "ZSL London Zoo, located in Regent's Park, is one of the oldest and most iconic zoos in the world. Established in 1828, the zoo is home to over 750 species of animals, from lions and tigers to penguins and gorillas. Visitors to the zoo can explore a variety of exhibits and attractions, including Land of the Lions, Tiger Territory, Gorilla Kingdom, and Penguin Beach. In addition to its animal exhibits, ZSL London Zoo offers a range of interactive experiences and educational programs for visitors of all ages. The zoo is committed to conservation and animal welfare, and works on a number of breeding and research projects to help protect endangered species. Whether you're interested in wildlife conservation, animal behavior, or simply enjoying a day out with the family, ZSL London Zoo offers an unforgettable experience for visitors of all ages.",
        description:
          "One of the world's oldest scientific zoos, with a variety of animals and interactive exhibits.",
        priority: 100,
      },
      {
        city: "London",
        lng: "en",
        uuid: "bf9c0021-dbc6-4699-bb41-2af6261849f3",
        name: "The London Dungeon",
        image: {
          credits: "giggel",
          license: "https://creativecommons.org/licenses/by/3.0",
        },
        location: {
          type: "Point",
          coordinates: [51.5029, -0.1195],
        },
        website: "https://www.thedungeons.com/london/en/",
        visit: {
          all: 90,
          outside: 0,
          schedule: [
            ["10:00", "17:00"],
            ["10:00", "17:00"],
            ["10:00", "17:00"],
            ["10:00", "17:00"],
            ["10:00", "17:00"],
            ["10:00", "17:00"],
            ["10:00", "17:00"],
          ],
        },
        price: 38,
        category: "Tourist attraction",
        information:
          "The London Dungeon is an immersive and interactive attraction that brings to life the dark and gruesome history of London. Located on the South Bank of the River Thames, the dungeon offers visitors a unique and thrilling experience, combining live actors, special effects, and exhibits to recreate some of the city's most chilling and macabre events. Visitors to the London Dungeon can journey through various themed areas, including the Plague Doctor's Surgery, the Torture Chamber, and the Great Fire of London. Along the way, they'll encounter costumed actors who portray historical figures and share gruesome tales of murder, betrayal, and intrigue. The attraction also features thrilling rides and immersive sets that transport visitors back in time to experience the sights, sounds, and smells of medieval London. Whether you're a history buff, a thrill-seeker, or just curious about London's dark past, the London Dungeon offers a spine-tingling experience that is not for the faint of heart.",
        description:
          "Interactive attraction featuring actors, special effects, and exhibits on London's dark history.",
        priority: 111,
      },
      {
        city: "London",
        lng: "en",
        uuid: "393b0e9d-ed6f-474a-8eaf-1cb010dc9f47",
        name: "SEA LIFE London Aquarium",
        image: {
          credits: "Phalinn Ooi",
          license: "https://creativecommons.org/licenses/by-sa/2.0",
        },
        location: {
          type: "Point",
          coordinates: [51.5015, -0.1194],
        },
        website: "https://www.visitsealife.com/london/",
        visit: {
          all: 150,
          outside: 0,
          schedule: [
            ["10:00", "17:00"],
            ["10:00", "17:00"],
            ["10:00", "17:00"],
            ["10:00", "17:00"],
            ["10:00", "17:00"],
            ["10:00", "17:00"],
            ["10:00", "17:00"],
          ],
        },
        price: 37,
        category: "Tourist attraction",
        information:
          "SEA LIFE London Aquarium is one of the city's premier attractions, offering visitors the chance to explore the wonders of the ocean without getting wet. Located on the South Bank of the River Thames, the aquarium is home to over 600 species of marine life, including sharks, jellyfish, sea turtles, and colorful tropical fish. Visitors to the aquarium can journey through a series of themed zones, each offering a unique underwater experience. Highlights of the aquarium include the Ocean Tunnel, where visitors can walk beneath the waves surrounded by sharks and rays, and the Rainforest Adventure, which showcases the vibrant ecosystems of the Amazon rainforest. The aquarium also offers a variety of interactive exhibits and educational presentations, making it a fun and informative day out for visitors of all ages. Whether you're a marine enthusiast, a family looking for a day of adventure, or just curious about the wonders of the deep, SEA LIFE London Aquarium offers a memorable and immersive experience for everyone.",
        description:
          "Aquarium showcasing a variety of marine life, including sharks, jellyfish, and sea turtles.",
        priority: 112,
      },
      {
        city: "London",
        lng: "en",
        uuid: "6ed4369f-c397-4ed0-bfe9-af2da053aadf",
        name: "Kensington Palace",
        image: {
          credits: "Steve Cadman",
          license: "https://creativecommons.org/licenses/by-sa/2.0",
        },
        location: {
          type: "Point",
          coordinates: [51.5051, -0.188],
        },
        website: "https://www.hrp.org.uk/kensington-palace/",
        visit: {
          all: 150,
          outside: 0,
          schedule: [
            ["Closed"],
            ["10:00", "18:00"],
            ["10:00", "18:00"],
            ["10:00", "18:00"],
            ["10:00", "18:00"],
            ["10:00", "18:00"],
            ["10:00", "18:00"],
          ],
        },
        price: 22,
        category: "Monument",
        information:
          "Kensington Palace is a historic royal residence located in the Kensington Gardens in London. Originally built in the 17th century, the palace has been a residence for members of the British royal family for over 300 years. Visitors can explore the elegant state rooms, which showcase royal fashion, portraits, and furnishings from various periods in history. Highlights include the King's State Apartments, the Queen's State Apartments, and the Victoria Revealed exhibition, which offers insights into the life and reign of Queen Victoria. Additionally, visitors can stroll through the beautiful gardens surrounding the palace, including the famous Sunken Garden, which was redesigned in tribute to Princess Diana. Kensington Palace is a must-visit for anyone interested in British history, royal culture, and elegant architecture.",
        description:
          "Historic royal residence with elegant state rooms and beautiful gardens.",
        priority: 120,
      },
      {
        city: "London",
        lng: "en",
        uuid: "e2927f17-45a6-4c42-a0cb-caff7751f0b0",
        name: "Churchill War Rooms",
        image: {
          credits: "Jordiferrer",
          license: "https://creativecommons.org/licenses/by-sa/4.0",
        },
        location: {
          type: "Point",
          coordinates: [51.502, -0.1293],
        },
        website: "https://www.iwm.org.uk/visits/churchill-war-rooms",
        visit: {
          all: 90,
          outside: 0,
          schedule: [
            ["9:30", "18:00"],
            ["9:30", "18:00"],
            ["9:30", "18:00"],
            ["9:30", "18:00"],
            ["9:30", "18:00"],
            ["9:30", "18:00"],
            ["9:30", "18:00"],
          ],
        },
        price: 44,
        category: "Museum",
        information:
          "The Churchill War Rooms is a historic underground complex located in London that served as the British government's command headquarters during World War II. Now part of the Imperial War Museums, the Churchill War Rooms offer visitors a fascinating glimpse into the inner workings of Britain's war effort during one of the most tumultuous periods in modern history. Visitors to the Churchill War Rooms can explore a series of underground bunkers and rooms that were used by Prime Minister Winston Churchill and his staff to plan and strategize during the war. Highlights of the museum include the Cabinet War Rooms, the Map Room, and Churchill's bedroom and office, all of which have been preserved in their original state. The museum also features interactive exhibits, archival materials, and multimedia presentations that bring the history of the war rooms to life. Whether you're a history buff, a military enthusiast, or simply curious about life during wartime, the Churchill War Rooms offer a compelling and educational experience for visitors of all ages.",
        description:
          "Historic underground complex used as British government command headquarters during World War II.",
        priority: 124,
      },
      {
        city: "London",
        lng: "en",
        uuid: "9de4fd74-3e9a-46c0-9d62-cba7c0ed5a06",
        name: "Imperial War Museum",
        image: {
          credits: "Ввласенко",
          license: "https://creativecommons.org/licenses/by-sa/3.0",
        },
        location: {
          type: "Point",
          coordinates: [51.4958, -0.1086],
        },
        website: "https://www.iwm.org.uk/visits/iwm-london",
        visit: {
          all: 180,
          outside: 0,
          schedule: [
            ["10:00", "18:00"],
            ["10:00", "18:00"],
            ["10:00", "18:00"],
            ["10:00", "18:00"],
            ["10:00", "21:00"],
            ["10:00", "18:00"],
            ["10:00", "18:00"],
          ],
        },
        price: 0,
        category: "Museum",
        information:
          "The Imperial War Museum in London is a world-renowned institution dedicated to exploring the history of modern warfare and its impact on society. Located in the Lambeth area of London, the museum offers visitors a comprehensive and immersive experience, with exhibitions, artifacts, and interactive displays that cover a wide range of topics related to conflict and its consequences. The museum's permanent collection includes military vehicles, aircraft, weapons, uniforms, and personal memorabilia from various conflicts throughout history, as well as multimedia exhibits, oral histories, and archival materials that provide insight into the human experience of war. In addition to its permanent exhibits, the Imperial War Museum also hosts temporary exhibitions on timely and thought-provoking topics, as well as educational programs, events, and activities for visitors of all ages. Whether you're interested in military history, social history, or simply looking to gain a deeper understanding of the world we live in, the Imperial War Museum offers a compelling and thought-provoking experience that is both informative and engaging.",
        description:
          "Museum dedicated to exploring the history of modern warfare and its impact on society, featuring exhibitions, artifacts, and immersive experiences.",
        priority: 132,
      },
    ],
    averageCost: 30,
  },
]);

db.cities.createIndex({ lng: 1 });
db.cities.createIndex({ city: 1 });

db.createCollection("users");

db.users.createIndex({ email: 1 }, { unique: true });

db.createCollection("travels");

db = db.getSiblingDB("test");

db.createCollection("cities");

db.cities.insertMany([
  {
    uuid: "44694d4a-59c4-48ea-9aa9-6dbbb2916b80",
    city: "London",
    continent: "Europe",
    lng: "en",
    lngSpoken: "English",
    country: "United Kingdom",
    countryCode: "GB",
    currency: "GBP",
    visa: "https://www.gov.uk/check-uk-visa",
    adapterPlug: "G",
    places: [
      {
        city: "London",
        lng: "en",
        uuid: "ce3dfb36-2c96-483a-b55e-962b3d455ea4",
        name: "Big Ben",
        image: {
          credits: "DiscoA340",
          license: "https://creativecommons.org/licenses/by-sa/4.0",
        },
        location: {
          type: "Point",
          coordinates: [51.5007, -0.1246],
        },
        website: "https://www.parliament.uk/bigben",
        visit: {
          all: 0,
          outside: 60,
          schedule: [
            ["09:00", "17:30"],
            ["09:00", "17:30"],
            ["09:00", "17:30"],
            ["09:00", "17:30"],
            ["09:00", "17:30"],
            ["Closed"],
            ["Closed"],
          ],
        },
        price: 0,
        category: "Monument",
        information:
          "Big Ben is one of London's most iconic landmarks, renowned for its striking clock tower and melodious chimes. Officially known as the Elizabeth Tower, the structure stands at the north end of the Palace of Westminster and houses the Great Bell, which is commonly referred to as Big Ben. The tower was completed in 1859 and has since become a symbol of British heritage and parliamentary democracy. Visitors can admire the exterior of the tower from the street and enjoy stunning views of the surrounding area, including the River Thames and Westminster Bridge. While access to the interior of the tower is restricted to UK residents, the exterior remains a must-see attraction for tourists visiting London.",
        description:
          "Iconic clock tower housing the Great Bell of the clock at the north end of the Palace of Westminster.",
        priority: 3,
      },
      {
        city: "London",
        lng: "en",
        uuid: "6ba00fb0-66dc-4e25-8c55-f976ac725c82",
        name: "Buckingham Palace",
        image: {
          credits: "Diliff",
          license: "https://creativecommons.org/licenses/by-sa/3.0",
        },
        location: {
          type: "Point",
          coordinates: [51.5014, -0.1415],
        },
        website: "https://www.rct.uk/visit/the-state-rooms-buckingham-palace",
        visit: {
          all: 150,
          outside: 60,
          schedule: [
            ["Closed"],
            ["9:30", "19:30"],
            ["9:30", "19:30"],
            ["9:30", "19:30"],
            ["9:30", "19:30"],
            ["9:30", "19:30"],
            ["9:30", "19:30"],
          ],
        },
        price: 33,
        category: "Monument",
        information:
          "Buckingham Palace is the official residence of the British monarch and the administrative headquarters of the monarchy. Located in the City of Westminster, the palace is a symbol of the British monarchy and a popular tourist attraction. Visitors can explore the opulent state rooms, which are used for official and ceremonial purposes, and admire the palace's impressive architecture and artwork. Highlights of the tour include the Grand Staircase, the Throne Room, and the Ballroom, where state banquets and receptions are held. Additionally, visitors can witness the Changing of the Guard ceremony, a traditional military ritual that takes place daily during the summer months and every other day during the rest of the year. Buckingham Palace also has extensive gardens, which are occasionally open to the public during the summer months. Whether you're interested in history, architecture, or royal traditions, a visit to Buckingham Palace offers a fascinating glimpse into British royal life.",
        description:
          "Official residence of the British monarch, with opulent state rooms and ceremonial events.",
        priority: 5,
      },
      {
        city: "London",
        lng: "en",
        uuid: "3452fdd6-6a74-4ab1-935d-5ca721e3a083",
        name: "Tower of London",
        image: {
          credits: "Bob Collowan",
          license: "https://creativecommons.org/licenses/by-sa/3.0",
        },
        location: {
          type: "Point",
          coordinates: [51.5081, -0.0759],
        },
        website: "https://www.hrp.org.uk/tower-of-london/",
        visit: {
          all: 210,
          outside: 60,
          schedule: [
            ["10:00", "16:30"],
            ["09:00", "16:30"],
            ["09:00", "16:30"],
            ["09:00", "16:30"],
            ["09:00", "16:30"],
            ["09:00", "16:30"],
            ["10:00", "16:30"],
          ],
        },
        price: 33,
        category: "Monument",
        information:
          "The Tower of London, officially Her Majesty's Royal Palace and Fortress of the Tower of London, is a historic castle located on the north bank of the River Thames in central London. It was founded towards the end of 1066 as part of the Norman Conquest of England. The White Tower, which gives the entire castle its name, was built by William the Conqueror in 1078 and was a resented symbol of oppression, inflicted upon London by the new ruling elite. The castle was used as a prison from 1100 until 1952, although that was not its primary purpose. A grand palace early in its history, it served as a royal residence. As a whole, the Tower is a complex of several buildings set within two concentric rings of defensive walls and a moat. The Tower has served variously as an armoury, a treasury, a menagerie, the home of the Royal Mint, a public records office, and the home of the Crown Jewels of England. The Tower of London is a must-visit for anyone interested in British history.",
        description: "Historic fortress and former royal palace.",
        priority: 7,
      },
      {
        city: "London",
        lng: "en",
        uuid: "9555f803-fd1b-48f0-ab80-c7a581557af9",
        name: "Tower Bridge",
        image: {
          credits: "Colin",
          license: "https://creativecommons.org/licenses/by-sa/4.0",
        },
        location: {
          type: "Point",
          coordinates: [51.5055, -0.0757],
        },
        website: "https://www.towerbridge.org.uk/",
        visit: {
          all: 150,
          outside: 60,
          schedule: [
            ["10:00", "17:30"],
            ["10:00", "17:30"],
            ["10:00", "17:30"],
            ["10:00", "17:30"],
            ["10:00", "17:30"],
            ["10:00", "17:30"],
            ["10:00", "17:30"],
          ],
        },
        price: 13,
        category: "Monument",
        information:
          "Tower Bridge is one of London's most recognizable landmarks, known for its distinctive bascule and suspension design. Completed in 1894, the bridge spans the River Thames, connecting the boroughs of Tower Hamlets and Southwark. Visitors can explore the bridge's high-level walkways, offering panoramic views of the city skyline and the opportunity to see the bridge's inner workings. The Tower Bridge Exhibition, located within the bridge's twin towers, provides insights into the bridge's history and engineering marvels. Additionally, visitors can witness the bridge's iconic bascules in action during scheduled bridge lifts. Tower Bridge is a must-visit attraction for anyone interested in London's architectural and engineering heritage.",
        description:
          "Iconic bascule and suspension bridge over the River Thames.",
        priority: 8,
      },
      {
        city: "London",
        lng: "en",
        uuid: "36c6c6b6-8131-440c-b6fb-7e32b29c242c",
        name: "Westminster Abbey",
        image: {
          credits: "Σπάρτακος",
          license: "https://creativecommons.org/licenses/by-sa/4.0",
        },
        location: {
          type: "Point",
          coordinates: [51.4994, -0.128],
        },
        website: "https://www.westminster-abbey.org/",
        visit: {
          all: 180,
          outside: 60,
          schedule: [
            ["9:30", "15:30"],
            ["9:30", "15:30"],
            ["9:30", "15:30"],
            ["9:30", "15:30"],
            ["9:30", "15:30"],
            ["9:30", "13:30"],
            ["Closed"],
          ],
        },
        price: 28,
        category: "Monument",
        information:
          "Westminster Abbey, formally known as the Collegiate Church of St Peter at Westminster, is an iconic historical and religious landmark in London. Founded in the 10th century, the abbey has been the site of coronations and burials of English monarchs for centuries. Visitors can explore its impressive Gothic architecture, admire its medieval stained glass windows, and discover the tombs of historical figures such as Queen Elizabeth I, Isaac Newton, and Charles Darwin. In addition to its historical and religious significance, Westminster Abbey also hosts choral music concerts and other cultural events. It is a must-visit destination for those interested in British history, Gothic architecture, and religious culture.",
        description:
          "Iconic Gothic abbey with centuries of history, hosting royal ceremonies and burials.",
        priority: 9,
      },
      {
        city: "London",
        lng: "en",
        uuid: "1b430f35-a751-4786-8179-800472dc3350",
        name: "London Eye",
        image: {
          credits: "Khamtran",
          license: "https://creativecommons.org/licenses/by-sa/3.0",
        },
        location: {
          type: "Point",
          coordinates: [51.5033, -0.1195],
        },
        website: "https://www.londoneye.com/",
        visit: {
          all: 90,
          outside: 30,
          schedule: [
            ["11:00", "18:00"],
            ["11:00", "18:00"],
            ["11:00", "18:00"],
            ["11:00", "18:00"],
            ["11:00", "18:00"],
            ["11:00", "18:00"],
            ["10:00", "20:00"],
          ],
        },
        price: 38,
        category: "Tourist attraction",
        information:
          "The London Eye is a giant Ferris wheel located on the South Bank of the River Thames. It offers breathtaking panoramic views of London's skyline and is one of the city's most iconic landmarks. Each rotation of the wheel takes about 30 minutes, providing visitors with ample time to enjoy the spectacular vistas. The London Eye is particularly stunning during sunset and at night when the city lights up. Visitors can also enhance their experience with options like champagne flights or private capsules for special occasions. Additionally, the London Eye offers interactive experiences and educational exhibits, making it suitable for visitors of all ages. Whether you're a first-time visitor or a seasoned traveler, a ride on the London Eye is a must-do activity in London.",
        description:
          "Iconic giant Ferris wheel offering panoramic views of the city skyline.",
        priority: 10,
      },
      {
        city: "London",
        lng: "en",
        uuid: "8be63fff-08d8-4d6b-a6ca-a82f2ac34c1a",
        name: "St. Paul's Cathedral",
        image: {
          credits: "Colin",
          license: "https://creativecommons.org/licenses/by-sa/4.0",
        },
        location: {
          type: "Point",
          coordinates: [51.5138, -0.0991],
        },
        website: "https://www.stpauls.co.uk/",
        visit: {
          all: 180,
          outside: 60,
          schedule: [
            ["8:30", "16:30"],
            ["8:30", "16:30"],
            ["8:30", "16:30"],
            ["8:30", "16:30"],
            ["8:30", "16:30"],
            ["8:30", "16:30"],
            ["Closed"],
          ],
        },
        price: 25,
        category: "Church",
        information:
          "St. Paul's Cathedral is one of London's most iconic landmarks, renowned for its stunning architecture and rich history. Designed by Sir Christopher Wren in the late 17th century, the cathedral's dome is an iconic feature of the London skyline. Visitors can explore the cathedral's interior, including the impressive nave, intricate mosaics, and beautiful chapels. The Whispering Gallery, located inside the dome, offers unique acoustic effects and panoramic views of the interior. For those willing to climb further, the Stone Gallery and Golden Gallery provide breathtaking views of the city skyline. St. Paul's Cathedral also has a fascinating history, having survived the Great Fire of London in 1666 and played a prominent role in national events such as the funerals of Lord Nelson and Sir Winston Churchill. Whether you're interested in architecture, history, or religious heritage, a visit to St. Paul's Cathedral promises a memorable and enlightening experience.",
        description:
          "Iconic cathedral with stunning architecture and historic significance.",
        priority: 11,
      },
      {
        city: "London",
        lng: "en",
        uuid: "9271f2d9-c2f1-444d-ac41-e8a1ea1e0154",
        name: "Trafalgar Square",
        image: {
          credits: "Diliff",
          license: "https://creativecommons.org/licenses/by-sa/3.0",
        },
        location: {
          type: "Point",
          coordinates: [51.508, -0.1276],
        },
        website:
          "https://www.london.gov.uk/about-us/our-building-and-squares/trafalgar-square",
        visit: {
          all: 0,
          outside: 60,
          schedule: [
            ["Open"],
            ["Open"],
            ["Open"],
            ["Open"],
            ["Open"],
            ["Open"],
            ["Open"],
          ],
        },
        price: 0,
        category: "Monument",
        information:
          "Trafalgar Square is one of London's most iconic public spaces, renowned for its historic monuments, architectural landmarks, and vibrant cultural scene. Situated in the heart of the city's West End, the square is surrounded by landmarks such as the National Gallery, St Martin-in-the-Fields church, and the Admiralty Arch. The focal point of the square is Nelson's Column, a towering monument commemorating Admiral Horatio Nelson's victory at the Battle of Trafalgar. Visitors can also admire the square's four lion statues, historic fountains, and sculptures of prominent figures such as King George IV and General Sir Charles James Napier. Trafalgar Square is a popular destination for events and celebrations, including cultural festivals, concerts, and political demonstrations. Whether you're admiring the architecture, people-watching, or attending a public event, Trafalgar Square offers a dynamic and memorable experience in the heart of London.",
        description:
          "Iconic public square with historic monuments, fountains, and cultural events.",
        priority: 13,
      },
      {
        city: "London",
        lng: "en",
        uuid: "2d008dc7-2117-43dc-853f-84901c68517f",
        name: "Sky Garden",
        image: {
          credits: "Colin",
          license: "https://creativecommons.org/licenses/by-sa/4.0",
        },
        location: {
          type: "Point",
          coordinates: [51.5113, -0.0836],
        },
        website: "https://skygarden.london/",
        visit: {
          all: 0,
          outside: 120,
          schedule: [
            ["10:00", "18:00"],
            ["10:00", "18:00"],
            ["10:00", "18:00"],
            ["10:00", "18:00"],
            ["10:00", "18:00"],
            ["10:00", "21:00"],
            ["11:00", "21:00"],
          ],
        },
        price: 0,
        category: "Tourist attraction",
        information:
          "Sky Garden is a unique public space located atop the iconic 20 Fenchurch Street skyscraper, also known as the 'Walkie-Talkie' building. Situated in the heart of London's financial district, Sky Garden offers visitors panoramic views of the city skyline from its expansive rooftop garden. The garden features lush greenery, landscaped terraces, and observation decks where visitors can admire breathtaking vistas of landmarks such as the Tower of London, Tower Bridge, and the River Thames. In addition to its stunning views, Sky Garden is home to a variety of dining options, including restaurants, bars, and cafes, where visitors can enjoy a meal or drinks with a backdrop of the London skyline. Admission to Sky Garden is free, but advance booking is required to guarantee entry. Whether you're a tourist seeking a unique perspective of London or a local looking for a tranquil oasis in the city, Sky Garden offers an unforgettable experience for visitors of all ages.",
        description:
          "Rooftop garden offering panoramic views of London's skyline, with restaurants and observation decks.",
        priority: 14,
      },
      {
        city: "London",
        lng: "en",
        uuid: "7beb607a-f168-4fc4-96f3-73ed3b495bff",
        name: "Natural History Museum",
        image: {
          credits: "Julian Herzog",
          license: "https://creativecommons.org/licenses/by/4.0",
        },
        location: {
          type: "Point",
          coordinates: [51.4966, -0.1764],
        },
        website: "https://www.nhm.ac.uk/",
        visit: {
          all: 240,
          outside: 30,
          schedule: [
            ["10:00", "17:50"],
            ["10:00", "17:50"],
            ["10:00", "17:50"],
            ["10:00", "17:50"],
            ["10:00", "17:50"],
            ["10:00", "17:50"],
            ["10:00", "17:50"],
          ],
        },
        price: 0,
        category: "Museum",
        information:
          "The Natural History Museum in London is one of the world's leading museums dedicated to the natural world. Founded in 1881, the museum's extensive collection spans over 80 million specimens, including fossils, minerals, plants, animals, and human remains. Visitors can explore the museum's numerous galleries and exhibitions, which cover a wide range of topics such as evolution, biodiversity, geology, and ecology. Highlights of the museum's collection include the skeleton of a Diplodocus dinosaur, a life-size model of a blue whale, and the iconic Darwin Centre, which houses scientific research laboratories and specimens. The museum also offers interactive displays, hands-on activities, and educational programs for visitors of all ages. Admission to the Natural History Museum is free, although donations are encouraged to support the museum's conservation efforts and scientific research. Whether you're interested in dinosaurs, wildlife, or the history of the Earth, the Natural History Museum offers a fascinating and educational experience for visitors from around the world.",
        description:
          "World-renowned museum showcasing a vast collection of natural history specimens and exhibits.",
        priority: 21,
      },
      {
        city: "London",
        lng: "en",
        uuid: "b6865b1b-bcc7-45d1-a015-21237432228f",
        name: "Millennium Bridge",
        image: {
          credits: "Txllxt TxllxT",
          license: "https://creativecommons.org/licenses/by-sa/4.0",
        },
        location: {
          type: "Point",
          coordinates: [51.5094, -0.0985],
        },
        visit: {
          all: 0,
          outside: 60,
          schedule: [
            ["Open"],
            ["Open"],
            ["Open"],
            ["Open"],
            ["Open"],
            ["Open"],
            ["Open"],
          ],
        },
        price: 0,
        category: "Tourist attraction",
        information:
          "The Millennium Bridge, officially known as the London Millennium Footbridge, is a modern pedestrian suspension bridge spanning the River Thames in London. Opened in 2000, the bridge was designed by architects Norman Foster and Anthony Caro as part of the Millennium celebrations. The bridge connects the Tate Modern gallery on the South Bank with St. Paul's Cathedral on the north bank, providing pedestrians with a convenient and scenic route between these two iconic landmarks. The bridge's sleek and minimalist design, featuring a steel suspension structure and a slender deck, offers stunning views of the River Thames and the surrounding London skyline. Visitors to the Millennium Bridge can enjoy leisurely strolls across the river, take in panoramic views of landmarks such as the Tate Modern, Shakespeare's Globe Theatre, and the Shard, and capture memorable photos of London's iconic skyline. Whether you're a tourist exploring the city or a local out for a walk, the Millennium Bridge offers a unique and memorable experience for visitors of all ages.",
        description:
          "Modern pedestrian suspension bridge spanning the River Thames, offering scenic views of London landmarks.",
        priority: 23,
      },
      {
        city: "London",
        lng: "en",
        uuid: "60005404-7250-459e-9013-586167ceb1a6",
        name: "Oxford Street",
        image: {
          credits: "Ysangkok",
          license: "https://en.wikipedia.org/wiki/Public_domain",
        },
        location: {
          type: "Point",
          coordinates: [51.515, -0.1441],
        },
        website: "https://www.oxfordstreet.co.uk/",
        visit: {
          all: 0,
          outside: 60,
          schedule: [
            ["Open"],
            ["Open"],
            ["Open"],
            ["Open"],
            ["Open"],
            ["Open"],
            ["Open"],
          ],
        },
        price: 0,
        category: "Street",
        information:
          "Oxford Street is one of London's most famous shopping destinations, renowned for its wide range of shops, boutiques, and department stores. Stretching for approximately 1.5 miles from Marble Arch to Tottenham Court Road, the street is home to flagship stores for major retailers such as Selfridges, John Lewis, and Marks & Spencer, as well as a variety of fashion boutiques, beauty stores, and electronics shops. Oxford Street attracts millions of visitors each year, drawn by its diverse shopping options and central location in London's West End. In addition to its retail offerings, the street is known for its lively atmosphere, with street performers, musicians, and entertainers often found along the pedestrianized sections. Whether you're looking for high-end fashion, budget-friendly bargains, or unique souvenirs, Oxford Street offers a vibrant and bustling shopping experience in the heart of London.",
        description:
          "Major shopping street lined with flagship stores, department stores, and fashion boutiques.",
        priority: 24,
      },
      {
        city: "London",
        lng: "en",
        uuid: "b1bd22ee-5e70-43e2-a232-0c0c3162afab",
        name: "Madame Tussauds",
        image: {
          credits: "fotogoocom",
          license: "https://creativecommons.org/licenses/by/3.0",
        },
        location: {
          type: "Point",
          coordinates: [51.5228, -0.1547],
        },
        website: "https://www.madametussauds.com/london/en/",
        visit: {
          all: 150,
          outside: 0,
          schedule: [
            ["10:00", "16:00"],
            ["10:00", "16:00"],
            ["10:00", "16:00"],
            ["10:00", "16:00"],
            ["10:00", "16:00"],
            ["10:00", "16:00"],
            ["10:00", "16:00"],
          ],
        },
        price: 44,
        category: "Tourist attraction",
        information:
          "Madame Tussauds London is one of the most popular tourist attractions in the city, offering visitors the chance to get up close and personal with lifelike wax figures of celebrities, historical figures, and movie characters. Located in the Marylebone area of London, the museum features a diverse collection of wax figures, including actors, musicians, politicians, sports stars, and members of the royal family. Visitors to Madame Tussauds can pose for photos with their favorite celebrities, interact with interactive exhibits, and learn about the art of wax sculpting. The museum also features themed zones, such as the Marvel Superheroes 4D Experience, the Star Wars Experience, and the Spirit of London ride. Whether you're a fan of pop culture, history, or just looking for a fun day out, Madame Tussauds London offers an entertaining and memorable experience for visitors of all ages.",
        description:
          "Famous wax museum featuring lifelike figures of celebrities, historical figures, and movie characters.",
        priority: 25,
      },
      {
        city: "London",
        lng: "en",
        uuid: "064b15ad-d2f4-4440-b3c1-fee641b1c5bf",
        name: "Little Venice",
        image: {
          credits: "Uwe Aranas",
          license: "https://creativecommons.org/licenses/by-sa/4.0",
        },
        location: {
          type: "Point",
          coordinates: [51.521, -0.1836],
        },
        visit: {
          all: 0,
          outside: 120,
          schedule: [
            ["Open"],
            ["Open"],
            ["Open"],
            ["Open"],
            ["Open"],
            ["Open"],
            ["Open"],
          ],
        },
        price: 0,
        category: "Tourist attraction",
        information:
          "Little Venice is a charming and picturesque area in London, where the Grand Union and Regent's Canals meet. Known for its tranquil waterways, colorful houseboats, and waterside cafes, Little Venice offers visitors a peaceful escape from the hustle and bustle of the city. Visitors to Little Venice can enjoy leisurely walks along the canals, admiring the historic narrowboats and scenic views along the water. The area is also home to a number of cafes, restaurants, and pubs where visitors can enjoy a meal or drink with a view of the canal. In addition to its scenic beauty, Little Venice hosts a variety of events and activities throughout the year, including boat tours, floating markets, and cultural festivals. Whether you're taking a boat trip along the canals, enjoying a picnic by the water, or simply soaking up the atmosphere, Little Venice offers a delightful and relaxing experience for visitors of all ages.",
        description:
          "Picturesque area where the Grand Union and Regent's Canals meet, with houseboats and waterside cafes.",
        priority: 26,
      },
      {
        city: "London",
        lng: "en",
        uuid: "ad5d4437-738b-4a4f-aa90-306a8ee0d478",
        name: "Soho",
        image: {
          credits: "Diliff",
          license: "https://creativecommons.org/licenses/by-sa/3.0",
        },
        location: {
          type: "Point",
          coordinates: [51.5142, -0.1394],
        },
        website: "https://www.timeout.com/london/things-to-do/soho-area-guide",
        visit: {
          all: 0,
          outside: 90,
          schedule: [
            ["Open"],
            ["Open"],
            ["Open"],
            ["Open"],
            ["Open"],
            ["Open"],
            ["Open"],
          ],
        },
        price: 0,
        category: "Neighborhood",
        information:
          "Soho is a vibrant and eclectic neighborhood located in the heart of London's West End. Famous for its bustling streets, historic architecture, and diverse cultural scene, Soho has long been a magnet for artists, musicians, and creatives. Visitors can explore the neighborhood's lively streets, which are lined with an eclectic mix of shops, cafes, bars, and restaurants. Soho is also known for its vibrant nightlife, with numerous theaters, clubs, and live music venues offering entertainment late into the night. The neighborhood is home to iconic landmarks such as the Soho Square, the London Palladium, and the Ronnie Scott's Jazz Club. Additionally, Soho has a rich history, with connections to the entertainment industry, LGBTQ+ community, and immigrant communities. Whether you're seeking culinary delights, cultural experiences, or vibrant nightlife, Soho offers a dynamic and unforgettable experience in London.",
        description:
          "Lively neighborhood known for its vibrant nightlife, diverse dining scene, and cultural attractions.",
        priority: 29,
      },
      {
        city: "London",
        lng: "en",
        uuid: "42762aaf-19a3-413b-a484-424ddec4d903",
        name: "The Harry Potter Shop at Platform 9¾",
        image: {
          credits: "Matthias Süßen",
          license: "https://creativecommons.org/licenses/by/2.0",
        },
        location: {
          type: "Point",
          coordinates: [51.5322, -0.1241],
        },
        website: "https://www.harrypotterplatform934.com/",
        visit: {
          all: 0,
          outside: 90,
          schedule: [
            ["8:00", "22:00"],
            ["8:00", "22:00"],
            ["8:00", "22:00"],
            ["8:00", "22:00"],
            ["8:00", "22:00"],
            ["8:00", "22:00"],
            ["9:00", "22:00"],
          ],
        },
        price: 0,
        category: "Tourist attraction",
        information:
          "The Harry Potter Shop at Platform 9¾ is an official merchandise store located at King's Cross Station in London. Situated adjacent to the iconic Platform 9¾, where fictional characters from the Harry Potter series access the Hogwarts Express, the shop offers a wide variety of Harry Potter-themed products and souvenirs for fans of all ages. Visitors can browse through a range of merchandise, including wands, clothing, accessories, collectibles, and exclusive items inspired by the beloved wizarding world created by J.K. Rowling. The shop also features interactive displays, photo opportunities, and knowledgeable staff members who can assist with product inquiries and recommendations. Whether you're a die-hard Harry Potter fan or simply looking for a unique souvenir of your visit to London, the Harry Potter Shop at Platform 9¾ offers a magical shopping experience that captures the enchantment of the wizarding world.",
        description:
          "Official merchandise store located at King's Cross Station, offering a variety of Harry Potter-themed products and souvenirs.",
        priority: 29,
      },
      {
        city: "London",
        lng: "en",
        uuid: "74a48260-ce03-40ca-9a77-3ceca20acbcb",
        name: "Carnaby Street",
        image: {
          credits: "SisterLondon",
          license: "https://creativecommons.org/licenses/by-sa/4.0",
        },
        location: {
          type: "Point",
          coordinates: [51.5131, -0.1388],
        },
        website: "https://www.carnaby.co.uk/",
        visit: {
          all: 0,
          outside: 60,
          schedule: [
            ["10:00", "20:00"],
            ["10:00", "20:00"],
            ["10:00", "20:00"],
            ["10:00", "20:00"],
            ["10:00", "20:00"],
            ["10:00", "20:00"],
            ["12:00", "18:00"],
          ],
        },
        price: 0,
        category: "Street",
        information:
          "Carnaby Street is an iconic shopping destination located in London's West End, renowned for its trendy fashion boutiques, independent shops, and vibrant atmosphere. Originally made famous in the 1960s as the epicenter of the Swinging Sixties fashion scene, Carnaby Street continues to be a popular destination for fashionistas, trendsetters, and shoppers alike. The pedestrianized street is lined with an eclectic mix of stores, ranging from well-known brands to quirky independent boutiques, offering everything from clothing and accessories to beauty products, homeware, and gifts. In addition to its diverse shopping options, Carnaby Street is also home to a variety of cafes, restaurants, and bars, making it the perfect place to refuel and relax after a day of shopping. The street's vibrant atmosphere and unique blend of fashion, food, and culture make it a must-visit destination for anyone exploring London's West End. Whether you're hunting for the latest fashion trends, searching for unique gifts, or simply soaking up the lively atmosphere, Carnaby Street offers something for everyone to enjoy.",
        description:
          "Iconic shopping street in London's West End known for its fashion boutiques, restaurants, and vibrant atmosphere.",
        priority: 30,
      },
      {
        city: "London",
        lng: "en",
        uuid: "c901a8f4-4603-43e6-8b9f-aea9d27af41e",
        name: "The Monument",
        image: {
          credits: "Robert Lamb",
          license: "https://creativecommons.org/licenses/by-sa/2.0",
        },
        location: {
          type: "Point",
          coordinates: [51.5101, -0.0859],
        },
        website: "https://www.themonument.info/",
        visit: {
          all: 90,
          outside: 30,
          schedule: [
            ["9:30", "18:00"],
            ["9:30", "18:00"],
            ["9:30", "18:00"],
            ["9:30", "18:00"],
            ["9:30", "18:00"],
            ["9:30", "18:00"],
            ["9:30", "18:00"],
          ],
        },
        price: 6,
        category: "Monument",
        information:
          "The Monument to the Great Fire of London, commonly referred to as simply 'The Monument', is a historic structure located near the northern end of London Bridge. Designed by Sir Christopher Wren and completed in 1677, the monument was built to commemorate the Great Fire of London, which ravaged the city in 1666. Standing at 202 feet (61.5 meters) tall, the monument is the tallest isolated stone column in the world and offers visitors panoramic views of the London skyline from its viewing platform at the top. Visitors to the monument can climb the 311 steps to reach the viewing platform, where they can enjoy breathtaking views of the city and learn about the history of the Great Fire through interactive exhibits and displays. The monument also features a striking Doric column adorned with sculptures and inscriptions commemorating the rebuilding of the city after the fire. Whether you're interested in history, architecture, or simply enjoying a bird's-eye view of London, The Monument offers a unique and memorable experience for visitors of all ages.",
        description:
          "Historic monument commemorating the Great Fire of London, offering panoramic views of the city.",
        priority: 31,
      },
      {
        city: "London",
        lng: "en",
        uuid: "3d7da1fe-7eb1-4c66-b8c6-23cd13bbc90c",
        name: "Chinatown",
        image: {
          credits: "Dietmar Rabich",
          license: "https://creativecommons.org/licenses/by-sa/4.0",
        },
        location: {
          type: "Point",
          coordinates: [51.5109, -0.1317],
        },
        website: "https://chinatown.co.uk/",
        visit: {
          all: 0,
          outside: 60,
          schedule: [
            ["Open"],
            ["Open"],
            ["Open"],
            ["Open"],
            ["Open"],
            ["Open"],
            ["Open"],
          ],
        },
        price: 0,
        category: "Neighborhood",
        information:
          "Chinatown in London is a vibrant and bustling district that offers visitors a taste of authentic Chinese culture and cuisine. Located in the heart of the West End, the area is home to a wide range of Chinese restaurants, shops, markets, and cultural attractions. Visitors to Chinatown can explore the winding streets and alleyways lined with colorful lanterns, where they'll find a diverse array of dining options, from traditional Cantonese dim sum restaurants to regional specialties from across China. The area is also known for its vibrant street markets, where visitors can browse for souvenirs, trinkets, and traditional Chinese goods. Chinatown is not only a popular destination for dining and shopping but also hosts a variety of cultural events and celebrations throughout the year, including Chinese New Year festivities, lantern festivals, and dragon dances. Whether you're craving authentic Chinese cuisine, looking for unique gifts and souvenirs, or simply soaking up the lively atmosphere, Chinatown offers a vibrant and unforgettable experience for visitors of all ages.",
        description:
          "Vibrant district in London with authentic Chinese restaurants, shops, markets, and cultural events.",
        priority: 31,
      },
      {
        city: "London",
        lng: "en",
        uuid: "8d0431c1-874f-434b-80b9-fd6d9e4e192e",
        name: "Borough Market",
        image: {
          credits: "Stephen Amstrong",
          license: "https://creativecommons.org/licenses/by-sa/2.0",
        },
        location: {
          type: "Point",
          coordinates: [51.5055, -0.0906],
        },
        website: "https://boroughmarket.org.uk/",
        visit: {
          all: 0,
          outside: 120,
          schedule: [
            ["10:00", "17:00"],
            ["10:00", "17:00"],
            ["10:00", "17:00"],
            ["10:00", "17:00"],
            ["10:00", "18:00"],
            ["10:00", "17:00"],
            ["Closed"],
          ],
        },
        price: 0,
        category: "Market",
        information:
          "Borough Market is one of London's oldest and most renowned food markets, offering visitors a wide range of fresh produce, gourmet foods, and street food stalls in a vibrant and historic setting. Located in the heart of Southwark, the market has been serving customers since the 12th century and has a rich history as a hub of culinary activity in the city. Visitors to Borough Market can explore a diverse array of stalls selling everything from artisanal cheeses and charcuterie to freshly baked bread, pastries, and international street food. The market is also known for its selection of fresh fruits and vegetables, as well as specialty ingredients and spices from around the world. In addition to its food offerings, Borough Market hosts regular events, tastings, and cooking demonstrations, making it a popular destination for food enthusiasts and tourists alike. Whether you're shopping for ingredients, sampling local delicacies, or simply soaking up the lively atmosphere, Borough Market offers a unique and unforgettable culinary experience for visitors of all ages.",
        description:
          "Historic food market offering a wide range of fresh produce, gourmet foods, and street food stalls.",
        priority: 32,
      },
      {
        city: "London",
        lng: "en",
        uuid: "5673b19c-c522-4858-a0de-90a41643fe1e",
        name: "Harrods",
        image: {
          credits: "Sokkk",
          license: "https://en.wikipedia.org/wiki/Public_domain",
        },
        location: {
          type: "Point",
          coordinates: [51.4994, -0.1635],
        },
        website: "https://www.harrods.com/",
        visit: {
          all: 90,
          outside: 30,
          schedule: [
            ["10:00", "20:00"],
            ["10:00", "20:00"],
            ["10:00", "20:00"],
            ["10:00", "20:00"],
            ["10:00", "21:00"],
            ["10:00", "18:00"],
            ["11:30", "18:00"],
          ],
        },
        price: 0,
        category: "Market",
        information:
          "Harrods is an iconic department store located in Knightsbridge, London, renowned for offering a wide range of luxury goods, designer fashion, gourmet foods, and upscale services. Founded in 1834, Harrods has become synonymous with luxury shopping and attracts millions of visitors from around the world each year. Spanning over seven floors and covering over 1 million square feet of retail space, the store offers an unparalleled shopping experience, with departments dedicated to fashion, beauty, homeware, electronics, toys, and more. Harrods is also home to a number of restaurants, cafes, and food halls, where visitors can enjoy gourmet cuisine and delicacies from around the world. In addition to its retail offerings, Harrods provides a range of personalized services, including personal shopping, bespoke tailoring, and concierge services, ensuring that every visitor receives the highest level of service and attention. Whether you're browsing for luxury goods, enjoying a meal, or simply soaking in the opulent atmosphere, a visit to Harrods is a quintessential London experience.",
        description:
          "Iconic department store offering luxury goods, designer fashion, gourmet foods, and upscale services.",
        priority: 33,
      },
      {
        city: "London",
        lng: "en",
        uuid: "e146b0dd-d8ab-4a71-8654-ae92942a8f96",
        name: "M&M's World Store",
        image: {
          credits: "MaryG90",
          license: "https://creativecommons.org/licenses/by-sa/3.0",
        },
        location: {
          type: "Point",
          coordinates: [51.5106, -0.1312],
        },
        website: "https://www.mms.com/en-us/explore/mms-stores/london",
        visit: {
          all: 0,
          outside: 90,
          schedule: [
            ["10:00", "23:00"],
            ["10:00", "23:00"],
            ["10:00", "23:00"],
            ["10:00", "23:00"],
            ["10:00", "23:00"],
            ["10:00", "23:00"],
            ["12:00", "18:00"],
          ],
        },
        price: 0,
        category: "Tourist attraction",
        information:
          "M&M's World is a colorful flagship store located in the heart of London's West End, offering a wide range of M&M's-themed merchandise, souvenirs, and confections across multiple floors. Spanning over 35,000 square feet, the store features a vibrant and immersive retail experience that delights visitors of all ages. From personalized M&M's candies to apparel, accessories, home goods, and more, M&M's World offers something for every fan of the iconic chocolate candies. In addition to its extensive selection of merchandise, the store also features interactive exhibits, displays, and photo opportunities that bring the M&M's brand to life. Visitors can explore themed areas dedicated to their favorite M&M's characters, learn about the history of the brand, and create custom M&M's mixes in a rainbow of colors. Whether you're stocking up on sweet treats, searching for unique gifts, or simply indulging in a bit of chocolatey fun, M&M's World offers a memorable and delicious experience for visitors of all ages.",
        description:
          "Colorful flagship store offering M&M's-themed merchandise, souvenirs, and confections across multiple floors.",
        priority: 36,
      },
      {
        city: "London",
        lng: "en",
        uuid: "2340f510-0083-46ed-96f3-1b4e8c4fccb3",
        name: "LEGO Store",
        image: {
          credits: "Simeon87",
          license: "https://creativecommons.org/licenses/by-sa/4.0",
        },
        location: {
          type: "Point",
          coordinates: [51.5103, -0.1309],
        },
        website:
          "https://www.lego.com/en-gb/stores/store/london-leicester-square",
        visit: {
          all: 0,
          outside: 90,
          schedule: [
            ["10:00", "22:00"],
            ["10:00", "22:00"],
            ["10:00", "22:00"],
            ["10:00", "22:00"],
            ["10:00", "22:00"],
            ["10:00", "22:00"],
            ["12:00", "18:00"],
          ],
        },
        price: 0,
        category: "Tourist attraction",
        information:
          "The LEGO Store in London is an official retail destination for LEGO enthusiasts, offering a wide selection of LEGO sets, merchandise, and interactive experiences for visitors of all ages. Located in Leicester Square, the store features multiple floors filled with LEGO products, including exclusive sets, limited-edition releases, and hard-to-find collectibles. From iconic LEGO themes like LEGO City, LEGO Star Wars, and LEGO Ninjago to innovative LEGO Technic sets and LEGO Architecture kits, the store has something for every LEGO fan. In addition to its extensive selection of products, the LEGO Store offers interactive play areas, where visitors can build and create with LEGO bricks, as well as special events and activities throughout the year. Whether you're looking to add to your LEGO collection, seeking inspiration for your next build, or simply want to immerse yourself in the colorful world of LEGO, the LEGO Store in London offers a fun and memorable experience for visitors of all ages.",
        description:
          "Official LEGO store offering a wide selection of LEGO sets, merchandise, and interactive experiences.",
        priority: 37,
      },
      {
        city: "London",
        lng: "en",
        uuid: "3488ffe8-6184-49d8-a5fd-216717b64e5d",
        name: "Regent Street",
        image: {
          credits: "Clay Gregory",
          license: "https://creativecommons.org/licenses/by-sa/3.0",
        },
        location: {
          type: "Point",
          coordinates: [51.5111, -0.1388],
        },
        website: "https://www.regentstreetonline.com/",
        visit: {
          all: 0,
          outside: 60,
          schedule: [
            ["Open"],
            ["Open"],
            ["Open"],
            ["Open"],
            ["Open"],
            ["Open"],
            ["Open"],
          ],
        },
        price: 0,
        category: "Street",
        information:
          "Regent Street is one of London's most iconic shopping destinations, renowned for its elegant architecture, prestigious boutiques, and vibrant atmosphere. Stretching for approximately 1.3 miles from Oxford Circus to Piccadilly Circus, the street is lined with historic buildings adorned with ornate facades and regal columns. Regent Street is home to flagship stores for luxury brands such as Burberry, Apple, and Liberty, as well as high-street retailers, designer boutiques, and department stores. The street's wide sidewalks and pedestrianized sections make it ideal for leisurely strolls and window shopping, while its central location in London's West End ensures easy access to theaters, restaurants, and cultural attractions. Regent Street is also known for its festive decorations and seasonal events, particularly during the holiday season. Whether you're seeking high-end fashion, gourmet cuisine, or simply soaking up the vibrant atmosphere, Regent Street offers a quintessentially London shopping experience.",
        description:
          "Iconic shopping street known for its historic architecture and luxury boutiques.",
        priority: 38,
      },
      {
        city: "London",
        lng: "en",
        uuid: "110062a3-d269-4c81-9b91-fa12b65909e7",
        name: "Hamleys",
        image: {
          credits: "DAVID HOLT",
          license: "https://creativecommons.org/licenses/by-sa/2.0",
        },
        location: {
          type: "Point",
          coordinates: [51.5128, -0.1401],
        },
        website: "https://www.hamleys.com/",
        visit: {
          all: 0,
          outside: 90,
          schedule: [
            ["10:00", "20:00"],
            ["10:00", "20:00"],
            ["10:00", "20:00"],
            ["10:00", "20:00"],
            ["10:00", "20:00"],
            ["09:30", "20:00"],
            ["12:00", "18:00"],
          ],
        },
        price: 0,
        category: "Tourist attraction",
        information:
          "Hamleys is a world-famous toy store located in London's West End, offering a vast selection of toys, games, and entertainment for children of all ages. Founded in 1760, Hamleys is one of the oldest and largest toy retailers in the world, known for its iconic flagship store on Regent Street. Spanning over seven floors, the store features an extensive range of toys, including classic favorites, the latest releases, and exclusive products from top brands. From dolls and action figures to board games, puzzles, and electronic gadgets, Hamleys has something to delight every child and spark their imagination. In addition to its vast selection of toys, the store offers interactive demonstrations, live entertainment, and special events that make shopping at Hamleys a fun and memorable experience for the whole family. Whether you're browsing for the perfect gift, seeking out the latest trends, or simply enjoying a day out in London, Hamleys offers a magical and immersive world of play and discovery.",
        description:
          "World-famous toy store offering a vast selection of toys, games, and entertainment for children of all ages.",
        priority: 38,
      },
      {
        city: "London",
        lng: "en",
        uuid: "7a933383-f68c-411d-b270-b010db8f2040",
        name: "Camden Town",
        image: {
          credits: "Lewis Clark",
          license: "https://creativecommons.org/licenses/by-sa/2.0",
        },
        location: {
          type: "Point",
          coordinates: [51.5392, -0.1426],
        },
        website: "https://www.camdenmarket.com/",
        visit: {
          all: 0,
          outside: 210,
          schedule: [
            ["10:00", "19:00"],
            ["10:00", "19:00"],
            ["10:00", "19:00"],
            ["10:00", "19:00"],
            ["10:00", "19:00"],
            ["10:00", "19:00"],
            ["10:00", "19:00"],
          ],
        },
        price: 0,
        category: "Neighborhood",
        information:
          "Camden Town is a vibrant district in North London known for its eclectic market, alternative fashion, and lively atmosphere. Camden Market is one of the largest and most diverse markets in London, offering a wide range of stalls selling everything from vintage clothing and handmade crafts to international street food and antiques. Beyond the market, Camden Town is also famous for its music venues, street art, and diverse cultural scene. Visitors can explore the iconic Camden Lock, stroll along the Regent's Canal, or immerse themselves in the area's bohemian charm. Whether you're a fashion enthusiast, foodie, or music lover, Camden Town offers a unique and unforgettable experience.",
        description:
          "Eclectic market known for its alternative fashion and vibrant atmosphere.",
        priority: 40,
      },
      {
        city: "London",
        lng: "en",
        uuid: "3a62daea-b751-4f6a-980c-c7e15d210851",
        name: "The Shard",
        image: {
          credits: "Colin",
          license: "https://creativecommons.org/licenses/by-sa/4.0",
        },
        location: {
          type: "Point",
          coordinates: [51.5045, -0.0857],
        },
        website: "https://www.the-shard.com/",
        visit: {
          all: 90,
          outside: 0,
          schedule: [
            ["10:00", "22:00"],
            ["10:00", "22:00"],
            ["10:00", "22:00"],
            ["10:00", "22:00"],
            ["10:00", "22:00"],
            ["10:00", "22:00"],
            ["10:00", "22:00"],
          ],
        },
        price: 38,
        category: "Tourist attraction",
        information:
          "The Shard is an iconic skyscraper located in the heart of London, offering breathtaking panoramic views of the city skyline. Standing at a height of 310 meters (1,017 feet), it is the tallest building in the United Kingdom and has become a prominent feature of the London skyline since its completion in 2012. Visitors can ascend to the building's observation deck, known as The View from The Shard, which offers 360-degree views of London from an altitude of over 200 meters (800 feet). On a clear day, visibility can extend for up to 40 miles, allowing visitors to see landmarks such as the Tower Bridge, St Paul's Cathedral, and the River Thames. The Shard also houses a variety of restaurants, bars, and luxury hotels, making it a popular destination for both tourists and locals alike. Whether you're admiring the views, enjoying a meal, or simply marveling at the architectural feat, a visit to The Shard promises an unforgettable experience in London.",
        description:
          "Iconic skyscraper offering panoramic views of London from its observation deck.",
        priority: 40,
      },
      {
        city: "London",
        lng: "en",
        uuid: "b69f3980-4e79-43a3-bf5b-07c6d73efc26",
        name: "St Dunstan in the East",
        image: {
          credits: "Mx. Granger",
          license: "https://en.wikipedia.org/wiki/Public_domain",
        },
        location: {
          type: "Point",
          coordinates: [51.5096, -0.0825],
        },
        website:
          "https://www.cityoflondon.gov.uk/things-to-do/city-gardens/find-a-garden/st-dunstan-in-the-east-church-garden",
        visit: {
          all: 60,
          outside: 0,
          schedule: [
            ["08:00", "17:00"],
            ["08:00", "17:00"],
            ["08:00", "17:00"],
            ["08:00", "17:00"],
            ["08:00", "17:00"],
            ["08:00", "17:00"],
            ["08:00", "17:00"],
          ],
        },
        price: 0,
        category: "Park",
        information:
          "St Dunstan in the East is a historic church located in the heart of London that has been transformed into a tranquil garden oasis. Originally built in the 12th century, the church was severely damaged during the Great Fire of London in 1666 and again during the Blitz in World War II. Rather than being fully restored, the ruins of the church were preserved and transformed into a public garden, creating a peaceful and contemplative space amidst the bustling city streets. Visitors to St Dunstan in the East can explore the ivy-covered ruins of the church, which provide a picturesque backdrop for relaxation, reflection, and photography. The garden is filled with lush greenery, colorful flowers, and winding pathways, making it an ideal spot for a leisurely stroll or a quiet escape from the hustle and bustle of city life. Whether you're seeking a moment of tranquility, a scenic spot for a picnic, or simply a unique and historic attraction to explore, St Dunstan in the East offers a peaceful retreat in the heart of London.",
        description:
          "Historic church ruins transformed into a tranquil garden oasis in the heart of London.",
        priority: 43,
      },
      {
        city: "London",
        lng: "en",
        uuid: "ae28f4c8-2f68-495e-b94e-889f35eb730b",
        name: "Covent Garden",
        image: {
          credits: "Ank Kumar",
          license: "https://creativecommons.org/licenses/by-sa/4.0",
        },
        location: {
          type: "Point",
          coordinates: [51.512, -0.1227],
        },
        website: "https://coventgarden.london/",
        visit: {
          all: 0,
          outside: 60,
          schedule: [
            ["10:00", "20:00"],
            ["10:00", "20:00"],
            ["10:00", "20:00"],
            ["10:00", "20:00"],
            ["10:00", "20:00"],
            ["10:00", "20:00"],
            ["11:00", "18:00"],
          ],
        },
        price: 0,
        category: "Market",
        information:
          "Covent Garden is a vibrant and historic district located in the heart of London's West End. Once a thriving fruit and vegetable market, the area is now known for its eclectic mix of shops, restaurants, bars, and cultural attractions. Visitors to Covent Garden can explore the historic market buildings, which are home to a variety of boutique shops, artisanal stalls, and gourmet food vendors. The district is also known for its lively street performers, who entertain visitors with music, magic, and theatrical performances throughout the day. Covent Garden is a popular destination for dining and nightlife, with numerous restaurants, cafes, and bars offering a wide range of cuisines and atmospheres. In addition to its shopping and dining options, Covent Garden is home to several cultural attractions, including the Royal Opera House and the London Transport Museum. Whether you're browsing the market stalls, enjoying a meal al fresco, or taking in a world-class performance, Covent Garden offers a unique and vibrant experience in the heart of London.",
        description:
          "Historic market district with shops, restaurants, street performers, and cultural attractions.",
        priority: 47,
      },
      {
        city: "London",
        lng: "en",
        uuid: "d7ebed78-9f99-47c7-b862-a3eb33489735",
        name: "Hyde Park",
        image: {
          credits: "Purplepupil",
          license: "https://creativecommons.org/licenses/by-sa/4.0",
        },
        location: {
          type: "Point",
          coordinates: [51.5074, -0.1662],
        },
        website: "https://www.royalparks.org.uk/parks/hyde-park",
        visit: {
          all: 0,
          outside: 180,
          schedule: [
            ["Open"],
            ["Open"],
            ["Open"],
            ["Open"],
            ["Open"],
            ["Open"],
            ["Open"],
          ],
        },
        price: 0,
        category: "Park",
        information:
          "Hyde Park is one of London's most famous parks, covering 350 acres and offering a peaceful retreat from the hustle and bustle of the city. Visitors can enjoy leisurely walks, picnics, boating on the Serpentine lake, or simply relaxing in the vast green spaces. The park is also home to various monuments and landmarks, including the Diana, Princess of Wales Memorial Fountain, the Serpentine Galleries, and the iconic Speaker's Corner. Throughout the year, Hyde Park hosts numerous events and concerts, attracting visitors from all over the world. Whether you're looking for outdoor recreation, cultural experiences, or simply a place to unwind, Hyde Park has something for everyone.",
        description:
          "Iconic park offering vast green spaces and recreational activities.",
        priority: 50,
      },
      {
        city: "London",
        lng: "en",
        uuid: "f51d09fb-1ba1-48cf-b9cf-ae8a2f256a24",
        name: "St James's Park",
        image: {
          credits: "Colin",
          license: "https://creativecommons.org/licenses/by-sa/3.0",
        },
        location: {
          type: "Point",
          coordinates: [51.5027, -0.1339],
        },
        website: "https://www.royalparks.org.uk/parks/st-jamess-park",
        visit: {
          all: 0,
          outside: 90,
          schedule: [
            ["Open"],
            ["Open"],
            ["Open"],
            ["Open"],
            ["Open"],
            ["Open"],
            ["Open"],
          ],
        },
        price: 0,
        category: "Park",
        information:
          "St James's Park is a scenic park located in the heart of London, adjacent to Buckingham Palace. Covering 23 hectares, it is the oldest of the royal parks in London and offers visitors a tranquil escape from the bustling city streets. The park features a beautiful lake, home to a variety of waterfowl including pelicans, as well as lush green spaces, flower beds, and tree-lined avenues. Visitors can enjoy leisurely strolls along the paths, relax on the lawns, or admire iconic views of Buckingham Palace and the Horse Guards Parade. St James's Park is also known for its charming pelicans, which have been a resident feature since the mid-17th century. Whether you're looking for a peaceful retreat or a picturesque backdrop for a leisurely walk, St James's Park offers a delightful experience for visitors of all ages.",
        description:
          "Scenic park with a lake, wildlife, and iconic views of Buckingham Palace.",
        priority: 50,
      },
      {
        city: "London",
        lng: "en",
        uuid: "38574046-6d08-4fdb-9765-fb4c115b2595",
        name: "Science Museum",
        image: {
          credits: "Shadowssettle",
          license: "https://creativecommons.org/licenses/by-sa/4.0",
        },
        location: {
          type: "Point",
          coordinates: [51.4974, -0.1742],
        },
        website: "https://www.sciencemuseum.org.uk/",
        visit: {
          all: 180,
          outside: 0,
          schedule: [
            ["10:00", "18:00"],
            ["10:00", "18:00"],
            ["10:00", "18:00"],
            ["10:00", "18:00"],
            ["10:00", "18:00"],
            ["10:00", "18:00"],
            ["10:00", "18:00"],
          ],
        },
        price: 0,
        category: "Museum",
        information:
          "The Science Museum in London is a world-renowned institution dedicated to exploring the wonders of science, technology, engineering, and mathematics (STEM). Located in South Kensington, the museum offers visitors a diverse range of interactive exhibits, hands-on experiences, and immersive displays that showcase the latest developments in scientific research and innovation. From space exploration and robotics to medicine and climate change, the Science Museum covers a wide range of topics and disciplines, making it a fascinating destination for visitors of all ages. Highlights of the museum include the Wonderlab: The Equinor Gallery, an interactive gallery where visitors can engage with scientific phenomena and experiments, and the Flight Gallery, which features historic aircraft and exhibits on the history of aviation. The museum also hosts regular events, workshops, and demonstrations, as well as temporary exhibitions on cutting-edge scientific topics. Whether you're a budding scientist, a curious explorer, or simply looking for a fun and educational day out, the Science Museum offers something for everyone to enjoy.",
        description:
          "Interactive museum exploring the world of science, technology, engineering, and mathematics (STEM).",
        priority: 51,
      },
      {
        city: "London",
        lng: "en",
        uuid: "5b0a226d-9063-44b7-9860-5a2561c4950b",
        name: "Leicester Square",
        image: {
          credits: "DiscoA340",
          license: "https://creativecommons.org/licenses/by-sa/4.0",
        },
        location: {
          type: "Point",
          coordinates: [51.5103, -0.1301],
        },
        website: "https://www.leicestersquare.london/",
        visit: {
          all: 0,
          outside: 30,
          schedule: [
            ["Open"],
            ["Open"],
            ["Open"],
            ["Open"],
            ["Open"],
            ["Open"],
            ["Open"],
          ],
        },
        price: 0,
        category: "Tourist attraction",
        information:
          "Leicester Square is a bustling public square located in London's West End, renowned for its vibrant atmosphere and plethora of entertainment options. The square is surrounded by theaters, cinemas, restaurants, and bars, making it a popular destination for locals and tourists alike. Leicester Square is perhaps best known for hosting movie premieres and red carpet events, with its iconic Odeon cinema and neighboring theaters frequently playing host to Hollywood blockbusters and star-studded premieres. In addition to its entertainment venues, Leicester Square is also home to several statues and sculptures, including a statue of William Shakespeare, and is adorned with beautiful floral displays throughout the year. Visitors to Leicester Square can enjoy leisurely strolls, people-watching, or catch a live performance from one of the many street entertainers who frequent the area. Whether you're seeking world-class entertainment, delicious cuisine, or simply soaking up the lively atmosphere, Leicester Square offers something for everyone to enjoy.",
        description:
          "Iconic square in London's West End, known for its theaters, cinemas, restaurants, and entertainment venues.",
        priority: 56,
      },
      {
        city: "London",
        lng: "en",
        uuid: "cfc5f436-a9ac-4f77-b7b8-c880885036f7",
        name: "Victoria and Albert Museum",
        image: {
          credits: "Diliff",
          license: "https://creativecommons.org/licenses/by-sa/3.0",
        },
        location: {
          type: "Point",
          coordinates: [51.4966, -0.1722],
        },
        website: "https://www.vam.ac.uk/",
        visit: {
          all: 180,
          outside: 30,
          schedule: [
            ["10:00", "17:45"],
            ["10:00", "17:45"],
            ["10:00", "17:45"],
            ["10:00", "17:45"],
            ["10:00", "22:00"],
            ["10:00", "17:45"],
            ["10:00", "17:45"],
          ],
        },
        price: 0,
        category: "Museum",
        information:
          "The Victoria and Albert Museum, often abbreviated as the V&A, is the world's largest museum of applied and decorative arts and design, housing a vast collection of objects that span over 5,000 years of human creativity. Located in the South Kensington area of London, the museum's extensive collection includes art and design objects from a wide range of cultures and periods, including ceramics, textiles, furniture, fashion, sculpture, and photography. Highlights of the museum's collection include the British Galleries, which showcase the history of British design from the Tudor period to the present day, and the Cast Courts, which feature full-scale replicas of famous sculptures and architectural elements from around the world. In addition to its permanent collection, the V&A also hosts temporary exhibitions, educational programs, and special events throughout the year. Whether you're interested in art, design, or history, the Victoria and Albert Museum offers a rich and immersive cultural experience for visitors of all ages.",
        description:
          "World's largest museum of applied and decorative arts and design, with a collection spanning over 5,000 years of human creativity.",
        priority: 58,
      },
      {
        city: "London",
        lng: "en",
        uuid: "85193bfa-3fbd-4fdb-aeb9-cb519d3dc5ce",
        name: "Notting Hill",
        image: {
          credits: "Chris Whippet",
          license: "https://creativecommons.org/licenses/by-sa/2.0",
        },
        location: {
          type: "Point",
          coordinates: [51.517, -0.2059],
        },
        visit: {
          all: 0,
          outside: 150,
          schedule: [
            ["8:00", "19:00"],
            ["8:00", "19:00"],
            ["8:00", "19:00"],
            ["8:00", "19:00"],
            ["8:00", "19:00"],
            ["8:00", "19:00"],
            ["8:00", "17:00"],
          ],
        },
        price: 0,
        category: "Neighborhood",
        information:
          "Notting Hill is a vibrant and eclectic neighborhood located in the Royal Borough of Kensington and Chelsea. Famous for its colorful houses, quaint streets, and lively atmosphere, Notting Hill has become a popular destination for tourists and locals alike. Visitors can explore the bustling Portobello Road Market, which offers a wide range of antiques, vintage clothing, and street food stalls. The neighborhood is also known for its annual Notting Hill Carnival, Europe's largest street festival celebrating Caribbean culture and heritage. In addition to its markets and festivals, Notting Hill boasts charming cafes, boutique shops, and beautiful garden squares. Whether you're strolling through the picturesque streets, browsing the markets, or enjoying the vibrant cultural scene, Notting Hill offers a unique and memorable experience in London.",
        description:
          "Vibrant neighborhood known for its colorful houses, eclectic shops, and lively markets.",
        priority: 60,
      },
      {
        city: "London",
        lng: "en",
        uuid: "ff13aa41-4d62-4c2e-9ab0-5f157762569f",
        name: "Regent's Park",
        image: {
          credits: "Tom Page",
          license: "https://creativecommons.org/licenses/by-sa/2.0",
        },
        location: {
          type: "Point",
          coordinates: [51.5278, -0.1536],
        },
        website: "https://www.royalparks.org.uk/parks/the-regents-park",
        visit: {
          all: 0,
          outside: 120,
          schedule: [
            ["5:00", "18:00"],
            ["5:00", "18:00"],
            ["5:00", "18:00"],
            ["5:00", "18:00"],
            ["5:00", "18:00"],
            ["5:00", "18:00"],
            ["5:00", "18:00"],
          ],
        },
        price: 0,
        category: "Park",
        information:
          "Regent's Park is one of London's most iconic green spaces, offering visitors a tranquil escape from the hustle and bustle of the city. Spanning 395 acres in the heart of London, the park is renowned for its beautiful gardens, wide-open lawns, and recreational facilities. Visitors to Regent's Park can explore a variety of attractions, including the stunning Queen Mary's Gardens, which showcase vibrant floral displays and over 12,000 roses. The park also features sports facilities such as tennis courts, a boating lake, and children's playgrounds, making it a popular destination for outdoor recreation and leisure activities. Additionally, Regent's Park is home to the world-famous London Zoo, which houses a diverse collection of animals from around the globe. Whether you're taking a leisurely stroll, enjoying a picnic, or visiting the zoo, Regent's Park offers something for everyone to enjoy amidst its picturesque surroundings.",
        description:
          "Expansive public park featuring gardens, sports facilities, a lake, and London Zoo.",
        priority: 67,
      },
      {
        city: "London",
        lng: "en",
        uuid: "d8170bf8-9fb5-4e41-9f39-87252076637e",
        name: "The Making of Harry Potter",
        image: {
          credits: "Ank Kumar",
          license: "https://creativecommons.org/licenses/by-sa/4.0",
        },
        location: {
          type: "Point",
          coordinates: [51.6906, -0.4207],
        },
        website: "https://www.wbstudiotour.co.uk/",
        visit: {
          all: 240,
          outside: 0,
          schedule: [
            ["9:00", "10:00"],
            ["9:00", "10:00"],
            ["9:00", "10:00"],
            ["9:00", "10:00"],
            ["9:00", "10:00"],
            ["9:00", "10:00"],
            ["9:00", "10:00"],
          ],
        },
        price: 145,
        category: "Tourist attraction",
        information:
          "Warner Bros. Studio Tour London - The Making of Harry Potter offers fans of the beloved book and film series the chance to step behind the scenes and explore the magical world of Hogwarts. Located in Leavesden, just outside of London, the studio tour takes visitors on an immersive journey through the making of the iconic film franchise. Highlights of the tour include sets such as the Great Hall, Diagon Alley, and Platform 9¾, as well as props, costumes, and special effects used in the films. Visitors can also learn about the filmmaking process, from script to screen, and see firsthand the craftsmanship and attention to detail that went into bringing J.K. Rowling's magical world to life. The studio tour offers a variety of ticket options, including standard admission, guided tours, and special events. Whether you're a die-hard Harry Potter fan or simply curious about the magic behind the movies, Warner Bros. Studio Tour London offers an enchanting and unforgettable experience for visitors of all ages.",
        description:
          "Interactive tour showcasing sets, props, and costumes from the Harry Potter film series.",
        priority: 70,
      },
      {
        city: "London",
        lng: "en",
        uuid: "1f7eb542-9a74-4396-847e-ae13e06a45ca",
        name: "Shakespeare's Globe",
        image: {
          credits: "Diego Delso",
          license: "https://creativecommons.org/licenses/by-sa/2.0",
        },
        location: {
          type: "Point",
          coordinates: [51.5081, -0.0971],
        },
        website: "https://www.shakespearesglobe.com/",
        visit: {
          all: 120,
          outside: 30,
          schedule: [
            ["10:00", "17:00"],
            ["10:00", "17:00"],
            ["10:00", "17:00"],
            ["10:00", "17:00"],
            ["10:00", "17:00"],
            ["10:00", "17:00"],
            ["10:00", "17:00"],
          ],
        },
        price: 34,
        category: "Tourist attraction",
        information:
          "Shakespeare's Globe is a reconstruction of the historic Globe Theatre, where many of William Shakespeare's plays were originally performed. Located on the South Bank of the River Thames, the Globe Theatre offers visitors a unique opportunity to experience Shakespearean drama in an authentic Elizabethan setting. The theatre's wooden O-shaped structure and open-air design provide an immersive and intimate theatrical experience, allowing audiences to connect with the language and spirit of Shakespeare's plays as they were meant to be experienced. In addition to performances of Shakespeare's works, the Globe offers guided tours of the theatre, exhibitions on Elizabethan theatre and culture, and educational programs for students and teachers. Visitors to the Globe can also explore the nearby Globe Exhibition, which showcases artefacts and memorabilia related to the theatre's history and the life of William Shakespeare. Whether you're a theatre enthusiast, a history buff, or simply curious about Shakespearean drama, Shakespeare's Globe offers a captivating and memorable experience for visitors of all ages.",
        description:
          "Reconstruction of the historic Globe Theatre, offering guided tours, performances, and exhibitions.",
        priority: 73,
      },
      {
        city: "London",
        lng: "en",
        uuid: "db2345da-5402-49dc-87d9-918baccbeb69",
        name: "Museum of London",
        image: {
          credits: "Ethan Doyle White",
          license: "https://creativecommons.org/licenses/by-sa/4.0",
        },
        location: {
          type: "Point",
          coordinates: [51.5176, -0.0967],
        },
        website: "https://www.museumoflondon.org.uk/",
        visit: {
          all: 150,
          outside: 0,
          schedule: [
            ["10:00", "18:00"],
            ["10:00", "18:00"],
            ["10:00", "18:00"],
            ["10:00", "18:00"],
            ["10:00", "18:00"],
            ["10:00", "18:00"],
            ["10:00", "18:00"],
          ],
        },
        price: 0,
        category: "Museum",
        information:
          "The Museum of London is dedicated to exploring the history and culture of London, from its prehistoric origins to the present day. Located in the City of London, the museum offers visitors a comprehensive overview of the capital's rich and diverse history through a wide range of exhibits, artifacts, and interactive displays. The museum's permanent galleries cover various aspects of London life, including its Roman roots, medieval period, Tudor and Stuart eras, Victorian era, and the modern city. Visitors can explore reconstructed street scenes, archaeological finds, historical objects, and multimedia presentations that bring London's past to life. In addition to its permanent collections, the Museum of London also hosts temporary exhibitions, educational programs, and events that delve deeper into specific aspects of London's history and culture. Whether you're a history buff, a Londoner curious about your city's past, or a visitor keen to learn more about the capital, the Museum of London offers a fascinating and informative experience for all.",
        description:
          "Museum exploring the history and culture of London, from prehistoric times to the present day.",
        priority: 75,
      },
      {
        city: "London",
        lng: "en",
        uuid: "2882fef2-4008-4896-9702-17b22b671cc2",
        name: "HMS Belfast",
        image: {
          credits: "Alvesgaspar",
          license: "https://creativecommons.org/licenses/by-sa/3.0",
        },
        location: {
          type: "Point",
          coordinates: [51.5065, -0.08139],
        },
        website: "https://www.iwm.org.uk/visits/hms-belfast",
        visit: {
          all: 90,
          outside: 30,
          schedule: [
            ["10:00", "17:00"],
            ["10:00", "17:00"],
            ["10:00", "17:00"],
            ["10:00", "17:00"],
            ["10:00", "17:00"],
            ["10:00", "17:00"],
            ["10:00", "17:00"],
          ],
        },
        price: 23,
        category: "Tourist attraction",
        information:
          "HMS Belfast is a historic warship and museum located on the River Thames in London. Launched in 1938, the HMS Belfast served in World War II and the Korean War before being decommissioned in 1963. Today, the ship is preserved as a museum and offers visitors the opportunity to explore its decks, engine rooms, and gun turrets, providing a fascinating glimpse into naval history and life onboard a warship. Visitors to HMS Belfast can take guided tours led by knowledgeable staff who share stories and insights about the ship's wartime experiences and the daily lives of its crew. The museum also features interactive exhibits, displays on naval technology and strategy, and collections of artifacts related to the ship's history. From the cramped quarters of the crew to the commanding views from the ship's decks, HMS Belfast offers a unique and immersive experience that brings the story of Britain's naval heritage to life.",
        description:
          "Former Royal Navy cruiser turned museum ship, offering guided tours and exhibits on naval history.",
        priority: 76,
      },
      {
        city: "London",
        lng: "en",
        uuid: "2d5f72eb-22da-48d8-93c8-798b461583fc",
        name: "British Museum",
        image: {
          credits: "Ham",
          license: "https://creativecommons.org/licenses/by-sa/3.0",
        },
        location: {
          type: "Point",
          coordinates: [51.5194, -0.1276],
        },
        website: "https://www.britishmuseum.org/",
        visit: {
          all: 180,
          outside: 0,
          schedule: [
            ["10:00", "17:00"],
            ["10:00", "17:00"],
            ["10:00", "17:00"],
            ["10:00", "17:00"],
            ["10:00", "17:00"],
            ["10:00", "17:00"],
            ["10:00", "17:00"],
          ],
        },
        price: 0,
        category: "Museum",
        information:
          "The British Museum is one of the world's largest and most comprehensive museums, housing a vast collection of art and artifacts from across the globe. Founded in 1753, the museum's permanent collection spans over two million years of history, including objects from ancient Egypt, Greece, Rome, Asia, Africa, and the Americas. Highlights of the museum's collection include the Rosetta Stone, the Elgin Marbles, and the Egyptian mummies. Visitors can explore galleries dedicated to archaeology, anthropology, and world cultures, as well as temporary exhibitions featuring contemporary art and cultural heritage. Admission to the British Museum is free, although donations are encouraged to support the museum's preservation efforts and educational programs. Whether you're an art enthusiast, history buff, or simply curious about the world, the British Museum offers a rich and immersive cultural experience.",
        description:
          "World-renowned museum showcasing art and artifacts from ancient and contemporary cultures.",
        priority: 80,
      },
      {
        city: "London",
        lng: "en",
        uuid: "994a8247-8253-4735-84a4-e9375e411a4d",
        name: "National Gallery",
        image: {
          credits: "Diego Delso",
          license: "https://creativecommons.org/licenses/by-sa/4.0",
        },
        location: {
          type: "Point",
          coordinates: [51.5088, -0.1283],
        },
        website: "https://www.nationalgallery.org.uk/",
        visit: {
          all: 210,
          outside: 30,
          schedule: [
            ["10:00", "18:00"],
            ["10:00", "18:00"],
            ["10:00", "18:00"],
            ["10:00", "18:00"],
            ["10:00", "21:00"],
            ["10:00", "18:00"],
            ["10:00", "18:00"],
          ],
        },
        price: 0,
        category: "Museum",
        information:
          "The National Gallery in London is one of the world's premier art museums, housing a rich collection of Western European paintings from the 13th to the 19th centuries. Located in Trafalgar Square, the museum's impressive collection includes works by some of the most renowned artists in history, including Leonardo da Vinci, Vincent van Gogh, Rembrandt, and Michelangelo. Visitors to the National Gallery can explore a diverse range of artistic styles and periods, from medieval religious paintings to Renaissance masterpieces to Impressionist landscapes. In addition to its permanent collection, the museum also hosts temporary exhibitions, lectures, and events throughout the year. With its stunning architecture, world-class collection, and central location, the National Gallery offers a unique and enriching cultural experience for visitors of all ages.",
        description:
          "Art museum housing a rich collection of Western European paintings from the 13th to the 19th centuries.",
        priority: 87,
      },
      {
        city: "London",
        lng: "en",
        uuid: "37348067-b671-4733-971c-7edf0bcde6a2",
        name: "Tate Britain",
        image: {
          credits: "Julian Herzog",
          license: "https://creativecommons.org/licenses/by/4.0",
        },
        location: {
          type: "Point",
          coordinates: [51.491, -0.1278],
        },
        website: "https://www.tate.org.uk/visit/tate-britain",
        visit: {
          all: 150,
          outside: 0,
          schedule: [
            ["10:00", "18:00"],
            ["10:00", "18:00"],
            ["10:00", "18:00"],
            ["10:00", "18:00"],
            ["10:00", "18:00"],
            ["10:00", "18:00"],
            ["10:00", "18:00"],
          ],
        },
        price: 0,
        category: "Museum",
        information:
          "Tate Britain is an art museum located in London that houses the national collection of British art from 1500 to the present day. Situated on the banks of the River Thames in the Millbank area of London, the museum offers visitors a comprehensive survey of British art, with works spanning a wide range of periods, styles, and genres. The museum's permanent collection includes paintings, sculptures, drawings, prints, and other works of art by some of Britain's most celebrated artists, including J.M.W. Turner, William Hogarth, John Constable, and William Blake. Tate Britain also hosts temporary exhibitions and displays that explore specific themes, movements, or artists within the broader context of British art history. In addition to its galleries, the museum offers a variety of amenities and facilities, including cafes, shops, and educational programs for visitors of all ages. Whether you're a seasoned art lover or simply curious about British art and culture, Tate Britain offers a rich and rewarding experience that celebrates the diversity and creativity of the British artistic tradition.",
        description:
          "Art museum housing the national collection of British art from 1500 to the present day.",
        priority: 88,
      },
      {
        city: "London",
        lng: "en",
        uuid: "48b3ba47-23bd-4645-a66c-8f2d26188491",
        name: "Piccadilly Circus",
        image: {
          credits: "Jimmy Baikovicius",
          license: "https://creativecommons.org/licenses/by-sa/2.0",
        },
        location: {
          type: "Point",
          coordinates: [51.5101, -0.1342],
        },
        visit: {
          all: 0,
          outside: 60,
          schedule: [
            ["Open"],
            ["Open"],
            ["Open"],
            ["Open"],
            ["Open"],
            ["Open"],
            ["Open"],
          ],
        },
        price: 12,
        category: "Tourist attraction",
        information:
          "Piccadilly Circus is a famous public space and junction located in London's West End. It is known for its iconic neon signs, bustling atmosphere, and proximity to major attractions such as the Shaftesbury Memorial Fountain and the Criterion Theatre. Piccadilly Circus is surrounded by theaters, shops, and restaurants, making it a popular destination for tourists and locals alike. Visitors can enjoy the vibrant energy of the area, take photos with the famous signs, or simply relax and people-watch. Piccadilly Circus is also a transportation hub, with several bus routes and the Piccadilly and Bakerloo tube lines intersecting here. Whether you're exploring London's nightlife, shopping for souvenirs, or just soaking in the city's atmosphere, Piccadilly Circus is a must-visit destination.",
        description:
          "Iconic junction and public space known for its neon signs and bustling atmosphere.",
        priority: 90,
      },
      {
        city: "London",
        lng: "en",
        uuid: "1266fba4-5f18-43e4-820a-fc6e55a2cd69",
        name: "Royal Albert Hall",
        image: {
          credits: "Diliff",
          license: "https://creativecommons.org/licenses/by-sa/3.0",
        },
        location: {
          type: "Point",
          coordinates: [51.5009, -0.1775],
        },
        website: "https://www.royalalberthall.com/",
        visit: {
          all: 180,
          outside: 30,
          schedule: [
            ["10:00", "16:00"],
            ["10:00", "16:00"],
            ["10:00", "16:00"],
            ["10:00", "16:00"],
            ["10:00", "16:00"],
            ["10:00", "16:00"],
            ["10:00", "16:00"],
          ],
        },
        price: 24,
        category: "Monument",
        information:
          "The Royal Albert Hall is one of London's most iconic concert venues, renowned for its distinctive circular architecture and prestigious events. Opened in 1871 by Queen Victoria in memory of her beloved husband, Prince Albert, the hall has hosted countless performances by world-renowned artists, orchestras, and performers. The venue's diverse program includes classical music concerts, rock and pop performances, ballet and dance productions, film screenings, and cultural events. The Royal Albert Hall is also home to the BBC Proms, an annual summer festival of classical music featuring performances by leading orchestras and soloists. In addition to its main auditorium, the hall houses several smaller performance spaces, including the Elgar Room and the Verdi Room, which host intimate concerts and events. Whether you're attending a concert, taking a guided tour, or simply admiring the iconic architecture, a visit to the Royal Albert Hall promises a memorable cultural experience in the heart of London.",
        description:
          "Iconic concert hall hosting a wide range of music, dance, and cultural events.",
        priority: 95,
      },
      {
        city: "London",
        lng: "en",
        uuid: "a2406fc9-38cf-4a3f-a06b-96103f4dbc0a",
        name: "Tate Modern",
        image: {
          credits: "King of Hearts",
          license: "https://creativecommons.org/licenses/by-sa/4.0",
        },
        location: {
          type: "Point",
          coordinates: [51.5076, -0.1005],
        },
        website: "https://www.tate.org.uk/visit/tate-modern",
        visit: {
          all: 180,
          outside: 0,
          schedule: [
            ["10:00", "18:00"],
            ["10:00", "18:00"],
            ["10:00", "18:00"],
            ["10:00", "18:00"],
            ["10:00", "18:00"],
            ["10:00", "18:00"],
            ["10:00", "18:00"],
          ],
        },
        price: 0,
        category: "Museum",
        information:
          "Tate Modern is one of the world's premier museums of modern and contemporary art, housed in a striking building that was once a power station on the banks of the River Thames. Located in the heart of London's cultural district, the museum is renowned for its extensive collection of works by some of the most important modern and contemporary artists of the 20th and 21st centuries. Visitors to Tate Modern can explore a diverse range of artworks spanning various mediums, styles, and movements, from painting and sculpture to photography, video, and installation art. The museum's permanent collection includes iconic works by artists such as Pablo Picasso, Salvador Dalí, Andy Warhol, and Louise Bourgeois, as well as rotating exhibitions and special installations that showcase the latest developments in contemporary art. In addition to its galleries, Tate Modern offers a variety of amenities and facilities, including cafes, shops, and educational programs for visitors of all ages. Whether you're an art enthusiast, a casual visitor, or simply looking for a unique cultural experience, Tate Modern offers something for everyone to enjoy.",
        description:
          "Contemporary art museum housed in a former power station, featuring works by modern and contemporary artists.",
        priority: 98,
      },
      {
        city: "London",
        lng: "en",
        uuid: "de0eb6b4-faab-492c-986e-305757d6a8e7",
        name: "Sherlock Holmes Museum",
        image: {
          credits: "Cezary p",
          license: "https://creativecommons.org/licenses/by-sa/2.0",
        },
        location: {
          type: "Point",
          coordinates: [51.5237, -0.1585],
        },
        website: "https://www.sherlock-holmes.co.uk/",
        visit: {
          all: 90,
          outside: 0,
          schedule: [
            ["9:30", "18:00"],
            ["9:30", "18:00"],
            ["9:30", "18:00"],
            ["9:30", "18:00"],
            ["9:30", "18:00"],
            ["9:30", "18:00"],
            ["9:30", "18:00"],
          ],
        },
        price: 19,
        category: "Museum",
        information:
          "The Sherlock Holmes Museum is a dedicated museum located at 221B Baker Street in London, showcasing the life and work of Sherlock Holmes, the fictional detective created by Sir Arthur Conan Doyle. Housed in a Victorian townhouse that closely resembles the fictional detective's famous address, the museum offers visitors a chance to step back in time and immerse themselves in the world of Sherlock Holmes and his loyal companion Dr. John Watson. The museum's meticulously recreated rooms feature period furnishings, artifacts, and memorabilia related to Sherlock Holmes and the stories in which he appears, allowing visitors to experience the atmosphere of Victorian London and the adventures of literature's most famous detective. From the famous study to Dr. Watson's bedroom and Mrs. Hudson's kitchen, the museum offers a unique and immersive experience for fans of Sherlock Holmes and Victorian literature alike.",
        description:
          "Dedicated museum showcasing the life and work of Sherlock Holmes, the fictional detective created by Sir Arthur Conan Doyle.",
        priority: 99,
      },
      {
        city: "London",
        lng: "en",
        uuid: "bca07e1e-b420-4697-81b1-afc3a0cf28be",
        name: "ZSL London Zoo",
        image: {
          credits: "Heather Smithers",
          license: "https://creativecommons.org/licenses/by-sa/2.0",
        },
        location: {
          type: "Point",
          coordinates: [51.5352, -0.1546],
        },
        website: "https://www.zsl.org/zsl-london-zoo",
        visit: {
          all: 240,
          outside: 0,
          schedule: [
            ["10:00", "16:00"],
            ["10:00", "16:00"],
            ["10:00", "16:00"],
            ["10:00", "16:00"],
            ["10:00", "16:00"],
            ["10:00", "16:00"],
            ["10:00", "16:00"],
          ],
        },
        price: 40,
        category: "Tourist attraction",
        information:
          "ZSL London Zoo, located in Regent's Park, is one of the oldest and most iconic zoos in the world. Established in 1828, the zoo is home to over 750 species of animals, from lions and tigers to penguins and gorillas. Visitors to the zoo can explore a variety of exhibits and attractions, including Land of the Lions, Tiger Territory, Gorilla Kingdom, and Penguin Beach. In addition to its animal exhibits, ZSL London Zoo offers a range of interactive experiences and educational programs for visitors of all ages. The zoo is committed to conservation and animal welfare, and works on a number of breeding and research projects to help protect endangered species. Whether you're interested in wildlife conservation, animal behavior, or simply enjoying a day out with the family, ZSL London Zoo offers an unforgettable experience for visitors of all ages.",
        description:
          "One of the world's oldest scientific zoos, with a variety of animals and interactive exhibits.",
        priority: 100,
      },
      {
        city: "London",
        lng: "en",
        uuid: "bf9c0021-dbc6-4699-bb41-2af6261849f3",
        name: "The London Dungeon",
        image: {
          credits: "giggel",
          license: "https://creativecommons.org/licenses/by/3.0",
        },
        location: {
          type: "Point",
          coordinates: [51.5029, -0.1195],
        },
        website: "https://www.thedungeons.com/london/en/",
        visit: {
          all: 90,
          outside: 0,
          schedule: [
            ["10:00", "17:00"],
            ["10:00", "17:00"],
            ["10:00", "17:00"],
            ["10:00", "17:00"],
            ["10:00", "17:00"],
            ["10:00", "17:00"],
            ["10:00", "17:00"],
          ],
        },
        price: 38,
        category: "Tourist attraction",
        information:
          "The London Dungeon is an immersive and interactive attraction that brings to life the dark and gruesome history of London. Located on the South Bank of the River Thames, the dungeon offers visitors a unique and thrilling experience, combining live actors, special effects, and exhibits to recreate some of the city's most chilling and macabre events. Visitors to the London Dungeon can journey through various themed areas, including the Plague Doctor's Surgery, the Torture Chamber, and the Great Fire of London. Along the way, they'll encounter costumed actors who portray historical figures and share gruesome tales of murder, betrayal, and intrigue. The attraction also features thrilling rides and immersive sets that transport visitors back in time to experience the sights, sounds, and smells of medieval London. Whether you're a history buff, a thrill-seeker, or just curious about London's dark past, the London Dungeon offers a spine-tingling experience that is not for the faint of heart.",
        description:
          "Interactive attraction featuring actors, special effects, and exhibits on London's dark history.",
        priority: 111,
      },
      {
        city: "London",
        lng: "en",
        uuid: "393b0e9d-ed6f-474a-8eaf-1cb010dc9f47",
        name: "SEA LIFE London Aquarium",
        image: {
          credits: "Phalinn Ooi",
          license: "https://creativecommons.org/licenses/by-sa/2.0",
        },
        location: {
          type: "Point",
          coordinates: [51.5015, -0.1194],
        },
        website: "https://www.visitsealife.com/london/",
        visit: {
          all: 150,
          outside: 0,
          schedule: [
            ["10:00", "17:00"],
            ["10:00", "17:00"],
            ["10:00", "17:00"],
            ["10:00", "17:00"],
            ["10:00", "17:00"],
            ["10:00", "17:00"],
            ["10:00", "17:00"],
          ],
        },
        price: 37,
        category: "Tourist attraction",
        information:
          "SEA LIFE London Aquarium is one of the city's premier attractions, offering visitors the chance to explore the wonders of the ocean without getting wet. Located on the South Bank of the River Thames, the aquarium is home to over 600 species of marine life, including sharks, jellyfish, sea turtles, and colorful tropical fish. Visitors to the aquarium can journey through a series of themed zones, each offering a unique underwater experience. Highlights of the aquarium include the Ocean Tunnel, where visitors can walk beneath the waves surrounded by sharks and rays, and the Rainforest Adventure, which showcases the vibrant ecosystems of the Amazon rainforest. The aquarium also offers a variety of interactive exhibits and educational presentations, making it a fun and informative day out for visitors of all ages. Whether you're a marine enthusiast, a family looking for a day of adventure, or just curious about the wonders of the deep, SEA LIFE London Aquarium offers a memorable and immersive experience for everyone.",
        description:
          "Aquarium showcasing a variety of marine life, including sharks, jellyfish, and sea turtles.",
        priority: 112,
      },
      {
        city: "London",
        lng: "en",
        uuid: "6ed4369f-c397-4ed0-bfe9-af2da053aadf",
        name: "Kensington Palace",
        image: {
          credits: "Steve Cadman",
          license: "https://creativecommons.org/licenses/by-sa/2.0",
        },
        location: {
          type: "Point",
          coordinates: [51.5051, -0.188],
        },
        website: "https://www.hrp.org.uk/kensington-palace/",
        visit: {
          all: 150,
          outside: 0,
          schedule: [
            ["Closed"],
            ["10:00", "18:00"],
            ["10:00", "18:00"],
            ["10:00", "18:00"],
            ["10:00", "18:00"],
            ["10:00", "18:00"],
            ["10:00", "18:00"],
          ],
        },
        price: 22,
        category: "Monument",
        information:
          "Kensington Palace is a historic royal residence located in the Kensington Gardens in London. Originally built in the 17th century, the palace has been a residence for members of the British royal family for over 300 years. Visitors can explore the elegant state rooms, which showcase royal fashion, portraits, and furnishings from various periods in history. Highlights include the King's State Apartments, the Queen's State Apartments, and the Victoria Revealed exhibition, which offers insights into the life and reign of Queen Victoria. Additionally, visitors can stroll through the beautiful gardens surrounding the palace, including the famous Sunken Garden, which was redesigned in tribute to Princess Diana. Kensington Palace is a must-visit for anyone interested in British history, royal culture, and elegant architecture.",
        description:
          "Historic royal residence with elegant state rooms and beautiful gardens.",
        priority: 120,
      },
      {
        city: "London",
        lng: "en",
        uuid: "e2927f17-45a6-4c42-a0cb-caff7751f0b0",
        name: "Churchill War Rooms",
        image: {
          credits: "Jordiferrer",
          license: "https://creativecommons.org/licenses/by-sa/4.0",
        },
        location: {
          type: "Point",
          coordinates: [51.502, -0.1293],
        },
        website: "https://www.iwm.org.uk/visits/churchill-war-rooms",
        visit: {
          all: 90,
          outside: 0,
          schedule: [
            ["9:30", "18:00"],
            ["9:30", "18:00"],
            ["9:30", "18:00"],
            ["9:30", "18:00"],
            ["9:30", "18:00"],
            ["9:30", "18:00"],
            ["9:30", "18:00"],
          ],
        },
        price: 44,
        category: "Museum",
        information:
          "The Churchill War Rooms is a historic underground complex located in London that served as the British government's command headquarters during World War II. Now part of the Imperial War Museums, the Churchill War Rooms offer visitors a fascinating glimpse into the inner workings of Britain's war effort during one of the most tumultuous periods in modern history. Visitors to the Churchill War Rooms can explore a series of underground bunkers and rooms that were used by Prime Minister Winston Churchill and his staff to plan and strategize during the war. Highlights of the museum include the Cabinet War Rooms, the Map Room, and Churchill's bedroom and office, all of which have been preserved in their original state. The museum also features interactive exhibits, archival materials, and multimedia presentations that bring the history of the war rooms to life. Whether you're a history buff, a military enthusiast, or simply curious about life during wartime, the Churchill War Rooms offer a compelling and educational experience for visitors of all ages.",
        description:
          "Historic underground complex used as British government command headquarters during World War II.",
        priority: 124,
      },
      {
        city: "London",
        lng: "en",
        uuid: "9de4fd74-3e9a-46c0-9d62-cba7c0ed5a06",
        name: "Imperial War Museum",
        image: {
          credits: "Ввласенко",
          license: "https://creativecommons.org/licenses/by-sa/3.0",
        },
        location: {
          type: "Point",
          coordinates: [51.4958, -0.1086],
        },
        website: "https://www.iwm.org.uk/visits/iwm-london",
        visit: {
          all: 180,
          outside: 0,
          schedule: [
            ["10:00", "18:00"],
            ["10:00", "18:00"],
            ["10:00", "18:00"],
            ["10:00", "18:00"],
            ["10:00", "21:00"],
            ["10:00", "18:00"],
            ["10:00", "18:00"],
          ],
        },
        price: 0,
        category: "Museum",
        information:
          "The Imperial War Museum in London is a world-renowned institution dedicated to exploring the history of modern warfare and its impact on society. Located in the Lambeth area of London, the museum offers visitors a comprehensive and immersive experience, with exhibitions, artifacts, and interactive displays that cover a wide range of topics related to conflict and its consequences. The museum's permanent collection includes military vehicles, aircraft, weapons, uniforms, and personal memorabilia from various conflicts throughout history, as well as multimedia exhibits, oral histories, and archival materials that provide insight into the human experience of war. In addition to its permanent exhibits, the Imperial War Museum also hosts temporary exhibitions on timely and thought-provoking topics, as well as educational programs, events, and activities for visitors of all ages. Whether you're interested in military history, social history, or simply looking to gain a deeper understanding of the world we live in, the Imperial War Museum offers a compelling and thought-provoking experience that is both informative and engaging.",
        description:
          "Museum dedicated to exploring the history of modern warfare and its impact on society, featuring exhibitions, artifacts, and immersive experiences.",
        priority: 132,
      },
    ],
    averageCost: 30,
  },
]);

db.cities.createIndex({ lng: 1 });
db.cities.createIndex({ city: 1 });

db.createCollection("users");

db.users.createIndex({ email: 1 }, { unique: true });

db.createCollection("travels");
