// ActionProvider starter code
class ActionProvider {
    constructor(
     createChatBotMessage,
     setStateFunc,
     createClientMessage,
     stateRef,
     createCustomMessage,
     ...rest
   ) {
     this.createChatBotMessage = createChatBotMessage;
     this.setState = setStateFunc;
     this.createClientMessage = createClientMessage;
     this.stateRef = stateRef;
     this.createCustomMessage = createCustomMessage;
   }

   helloWorldHandler = () => {
    const message = this.createChatBotMessage("Hello, from BG3 Bot!");
    this.setChatBotMessage(message);
   }

   barbarianHandler = () => {
    const message = this.createChatBotMessage(`
      The Barbarian class in Baldur's Gate 3 is a fierce and primal warrior who channels their inner rage to deal devastating damage in battle. Barbarians are known for their immense physical strength, durability, and the ability to enter a state of rage that enhances their combat prowess. They are often seen as wild, untamed warriors, relying on their instincts and raw power to overcome enemies.
  
      Rage is the defining feature of the Barbarian. When a Barbarian entes a rage, they gain advantages like increased damage output, resistance to certain types of damage (such as slashing, piercing, and bludgeoning), and heightened combat abilities. Rage also enhances the Barbarians strength and speed in battle, allowing them to overpower most foes. However, it can only be used a limited number of times before resting.
  
      Barbarians have a unique defensive trait, Unarmored Defense, which allows them to use their Dexterity and Constitution modifiers to boost their Armor Class (AC) instead of wearing traditional armor. This makes Barbarians more mobile and harder to hit, especially when they focus on enhancing these stats.
  
      Barbarians can make their attacks more powerful with Reckless Attack. This allows them to gain advantage on melee attack rolls, but at the cost of granting the enemy advantage on their attacks against the Barbarian for the duration of that turn.
  
      Barbarians have a heightened sense of danger. This feature grants them advantage on Dexterity saving throws to avoid certain effects, such as traps, spells, or other environmental hazards. It reflects the Barbarian's ability to sense and react to threats quickly.
  
      Barbarians are fast on their feet, gaining an increased movement speed when they are not wearing heavy armor. This allows them to close the distance between them and their enemies or quickly reposition on the battlefield.
  
      The Barbarian has a choice of subclass, known as a Primal Path, which further defines their combat style. These subclasses provide different features and abilities that further enhance the Barbarian's strength and combat prowess. For example, the Berserker focuses on brutal attacks and unrelenting rage, gaining the ability to make additional attacks and increasing damage. The Wildheart connects more deeply with the primal forces of nature, allowing for animalistic abilities and unique enhancements. The Wild Magic path is more chaotic, where the Barbarians rage occasionally causes wild magic surges, affecting the environment or enemies in unpredictable ways.
  
      At higher levels, Barbarians can engage in a Frenzy, allowing them to make extra attacks in a single turn. This can further increase their potential for dealing massive damage, but it comes with a risk of exhaustion after prolonged combat. Once a Barbarian reaches higher levels, they can maintain their rage for longer periods, even continuing it through long stretches of combat without taking damage. This allows them to stay in the fight and keep applying pressure on their enemies.
  
      Barbarians excel as front-line damage dealers. With their high hit points, resistance to damage, and raw offensive power while raging, they are often the first into battle, charging headlong into the fray to take down enemies. They can absorb a lot of punishment and deal back even more, making them formidable opponents in direct combat. While Barbarians lack the ranged combat ability or versatility of some other classes, they more than make up for it with their sheer durability and offensive capability. They thrive in chaotic, up-close fights where they can use their raw strength to overwhelm foes.
  
      While not typically a tank in the traditional sense of absorbing damage for others, Barbarians can absorb a lot of punishment themselves and focus on dealing devastating blows to enemies. The Barbarian is a straightforward class with few frills, focusing on maximizing physical damage and surviving long enough to dish out as much destruction as possible.
  
      Barbarians are best suited for players who enjoy charging into battle and smashing through enemy lines. They are ideal for players who like playing high-damage, high-durability characters with minimal reliance on magic or ranged attacks.
  
      The Barbarian is a powerhouse on the battlefield, using their rage and brute strength to overwhelm enemies. With a focus on offense, survivability, and simple yet powerful abilities, Barbarians are ideal for players who love close combat and thrive in the heat of battle.
    `);
  
    this.setChatBotMessage(message);
  }

  bardHandler = () => {
    const message = this.createChatBotMessage(`
The Bard class in Baldur's Gate 3 is a versatile and charismatic spellcaster who uses their musical talents, wit, and charm to influence both allies and enemies. Bards are often seen as entertainers, diplomats, and scholars, but they are also skilled warriors and spellcasters. They draw their power from the art of performance, weaving magic through their songs, speeches, and tales to support their comrades and hinder their foes.

Bards are highly adaptable, capable of filling multiple roles in a party. They can support their allies by casting healing and buffing spells, as well as by inspiring them with their Bardic Inspiration ability. This ability allows them to grant bonus dice to their allies, improving their chances of success in combat or skill checks. Additionally, Bards have access to a vast array of spells from every school of magic, making them incredibly flexible in handling different situations. They can cast spells to damage enemies, control the battlefield, or even manipulate time itself.

The Bard’s most iconic feature is their ability to inspire others. Bardic Inspiration is a unique mechanic that allows the Bard to use their musical abilities to inspire courage, creativity, and focus in their allies. This can be used to add extra dice to attack rolls, saving throws, or ability checks, significantly enhancing the effectiveness of the party.

Bards are also masters of social interactions. With their high Charisma, they excel in persuasion, deception, and intimidation. This makes them invaluable in both combat and role-playing situations, as they can influence NPCs, navigate political intrigue, and convince enemies to stand down or join the party. Their ability to charm or frighten others with mere words allows them to find alternative solutions to problems that might otherwise lead to violence.

Bards are not just about support, however. They are also capable of holding their own in combat. Though they are not as strong as some other classes in terms of raw damage output, they can be deadly with the right spells and weapons. With proficiency in light armor and a variety of weapons, Bards can adapt to a variety of combat situations, from ranged attacks to melee combat.

The Bard has a choice of subclass, known as a College, which further defines their playstyle. These subclasses grant them additional abilities and enhance their talents. For example, the College of Lore allows Bards to excel in knowledge and support, granting them additional magical abilities and the power to cut down enemies with their words. The College of Valor focuses on enhancing the Bard’s martial abilities, making them more capable in combat and providing even greater support to their allies. The College of Glamour focuses on the Bard’s ability to charm and manipulate others, giving them more options for social interactions and battlefield control. Other colleges, such as the College of Swords or College of Whispers, offer different approaches, allowing players to tailor their Bard to suit their preferred playstyle.

Bards have an extensive list of spells at their disposal, including healing spells, enchantments, illusions, and control magic. They can also learn spells from other classes, allowing them to broaden their magical capabilities. Their spellcasting is tied to their Charisma, making them a force to be reckoned with both in and out of combat.

As a jack-of-all-trades, the Bard excels in versatility. They can serve as a support character, a front-line fighter, or a powerful spellcaster depending on how they are built. They thrive in dynamic situations, able to adjust to the ever-changing flow of battle, social interactions, and problem-solving scenarios.

Bards are ideal for players who enjoy a flexible, role-playing-rich experience. They are perfect for those who want to play a character that can do it all—support the team, talk their way out of situations, and be a powerful contributor to combat. With their extensive skills, spells, and social prowess, Bards are well-suited to any adventuring party, bringing a unique and valuable set of abilities to the table.
    `);
  
    this.setChatBotMessage(message);
  }

  clericHandler = () => {
    const message = this.createChatBotMessage(`
The Cleric class in Baldur's Gate 3 is a divine spellcaster who channels the power of a deity to heal, protect, and smite their enemies. Clerics are versatile and resilient, often considered the spiritual backbone of any adventuring party. They draw their magic from their faith, using divine spells to heal wounds, banish evil, and provide support to their allies. Their strong connection to the divine allows them to wield powerful magic that is unavailable to other spellcasters, making them indispensable in many situations.

Clerics are known for their healing abilities, capable of restoring lost health, curing diseases, and even resurrecting fallen allies. Their divine magic can also bolster the party’s defenses, providing protection against harmful spells and conditions. In addition to healing, Clerics can use their spells to deal damage to enemies, especially those who worship evil deities or are aligned with dark forces. They are formidable foes when wielding their divine magic, able to smite enemies with radiant energy or unleash powerful area-of-effect spells to turn the tide of battle.

One of the key features of the Cleric is their ability to choose a Divine Domain, a subclass that defines their specific role and abilities within the party. Each Domain reflects the teachings and philosophy of the Cleric’s chosen deity, granting them additional spells, abilities, and proficiencies. For example, the Life Domain focuses on healing and protection, granting additional healing spells and abilities that bolster the party's survivability. The Light Domain gives the Cleric control over radiant energy, allowing them to deal devastating damage and illuminate dark areas, while the Trickery Domain allows them to manipulate illusion and deception for tactical advantage.

Clerics are also skilled in a variety of support abilities, including the ability to protect their allies through magical barriers, bolster their resolve with divine inspiration, or even turn undead creatures, forcing them to flee in terror. Clerics are often called upon to act as mediators and leaders, able to inspire their allies with their faith and protect them from evil influences. Their ability to turn the tide of battle through healing or protective spells is what often sets them apart from other spellcasters, making them a critical asset in long, grueling fights.

While Clerics are often associated with healing, they are far from fragile. They are proficient in medium armor and shields, allowing them to stand strong in the frontlines of battle alongside more combat-focused classes. Their resilience makes them capable of withstanding damage, while their spellcasting gives them the ability to turn the battle in their favor. They can act as support characters from a distance, healing and buffing allies, or they can step into the fray with a weapon and shield, smiting foes with divine power.

In addition to their combat prowess and spellcasting abilities, Clerics also serve as the spiritual guides of the group. They can offer wisdom, guidance, and counsel in times of moral or ethical dilemmas. Their strong connection to their deity often provides them with insight into the divine, allowing them to foresee possible outcomes, detect evil, or even communicate with their god. They serve as moral compasses and leaders in the party, and their faith can help keep the group grounded and focused.

Clerics have a wide range of spells at their disposal, including healing, buffs, debuffs, and offensive spells. Their spellcasting ability is tied to their Wisdom modifier, which makes their connection to the divine stronger and enhances their healing abilities. They also have the unique ability to prepare different spells each day, allowing them to adapt to the needs of their party and the challenges they may face. This flexibility makes Clerics incredibly adaptable and capable of filling a variety of roles, from damage-dealer to healer to battlefield controller.

The Cleric class is ideal for players who enjoy playing support roles, but who also want the ability to fight and deal damage when necessary. With their strong connection to the divine, they are perfect for players who enjoy the idea of wielding the power of gods and fighting against evil forces. Clerics excel in any party, providing crucial healing, protection, and divine power that can turn the tide of battle and ensure victory in the most difficult of situations.    
`);
  
    this.setChatBotMessage(message);
  }

  druidHandler = () => {
    const message = this.createChatBotMessage(`
The Druid class in Baldur’s Gate 3 is a nature-based spellcaster who draws their power from the primal forces of the natural world. Known for their deep connection to the land, animals, and the elements, Druids are versatile and adaptable, able to shape-shift, control the elements, and heal the wounded. Their ability to commune with nature gives them unique insight and powers that allow them to manipulate the environment and shape the world around them.

Druids are primarily known for their powerful spellcasting abilities, which center around nature magic. They can call upon the forces of the wild to heal allies, summon creatures to aid in battle, create protective barriers of thorns and bark, or invoke elemental forces like fire, water, and earth to strike down enemies. Their spells are incredibly diverse, allowing them to deal with almost any situation by manipulating the world and the creatures within it. Whether controlling plants to restrain enemies, summoning a swarm of insects to harry foes, or calling down a thunderstorm to wreak havoc, Druids are highly versatile spellcasters who can adapt their magic to any circumstance.

One of the most iconic features of the Druid is their ability to shape-shift into various animals. This ability, known as Wild Shape, allows Druids to transform into different animals, gaining new forms and abilities that enhance their versatility. For example, they can transform into a bear to gain increased strength and durability, or shift into a wolf to gain enhanced mobility and stealth. This feature gives the Druid unparalleled flexibility, allowing them to fight in close combat, scout the environment, or even travel across difficult terrain with ease. As they level up, Druids gain access to additional animal forms, including more exotic creatures, expanding their options for combat and exploration.

Druids are also known for their close relationship with the environment. Their spells often involve plants, animals, and the natural world, and they can manipulate these elements to their advantage. For instance, a Druid can cast a spell that causes vines to grow and entangle enemies, preventing them from moving, or they can summon animals like wolves or dire bears to fight alongside them. This makes the Druid a great support character, able to control the battlefield by using the environment to their advantage or summoning creatures to overwhelm their enemies.

The Druid’s connection to nature extends to their ability to heal and protect their allies. With spells like Healing Word and Cure Wounds, Druids can mend wounds and restore lost health. They can also summon protective barriers, use restorative spells to cure poisons or diseases, and grant their allies temporary boosts to their physical abilities. This makes the Druid an excellent support character, especially in parties that need a healer who can also contribute to damage-dealing and crowd control.

Druids have the option to choose a subclass, known as a Druid Circle, which further refines their abilities and defines their role within the party. For example, the Circle of the Land enhances the Druid's connection to the land, granting additional spells and abilities that make them better at surviving in specific terrains, such as forests, deserts, or mountains. They also gain the ability to regain spell slots after a short rest, making them highly sustainable in longer encounters. The Circle of the Moon, on the other hand, focuses on enhancing the Druid’s Wild Shape abilities, allowing them to transform into more powerful creatures and even access the forms of elemental beings. Other circles, such as the Circle of Dreams or the Circle of Spores, offer unique abilities that cater to different playstyles, whether it's healing, manipulating dreams, or controlling decay and the undead.

Druids have a deep respect for balance and nature’s cycles. They often see themselves as protectors of the natural world, fighting to maintain harmony between civilization and the wild. This philosophy affects how they interact with the world, and they may refuse to engage in certain actions that they see as harmful to nature. However, their ability to adapt and change with the world around them makes them excellent problem-solvers and tacticians, capable of adjusting their approach to any situation.

While Druids are generally more focused on nature magic and support, they are also capable fighters. Their Wild Shape ability allows them to hold their own in melee combat, and with spells like Flame Blade or Call Lightning, they can deal significant damage from a distance. They are proficient in medium armor and shields, making them resilient in combat, and they can serve as front-line combatants when necessary.

The Druid class is ideal for players who enjoy versatility and adaptability. Whether playing as a support character, a spellcaster, or a front-line fighter, the Druid can fill many roles and excel in any situation. Their ability to shape-shift, control the elements, and call upon the power of nature makes them a powerful and flexible asset to any adventuring party. Druids thrive in campaigns that emphasize the balance between nature and civilization, making them perfect for players who want to explore a character deeply connected to the primal forces of the world and who can adapt their abilities to suit the ever-changing challenges of adventuring.
`);
  
    this.setChatBotMessage(message);
  }  

  fighterHandler = () => {
    const message = this.createChatBotMessage(`
The Fighter class in Baldur’s Gate 3 is a versatile and skilled combatant, known for their expertise with weapons and mastery of physical combat. Fighters excel in both offense and defense, making them a reliable presence on the battlefield. They are highly adaptable, capable of wielding a variety of weapons, wearing heavy armor, and taking on multiple roles in battle, from frontline tank to agile damage dealer. Fighters are often considered the backbone of any adventuring party, able to absorb damage, dish out heavy blows, and hold the line against powerful enemies.

Fighters are primarily focused on physical combat, and their proficiency with a wide array of weapons sets them apart from other classes. They are skilled with swords, axes, maces, and ranged weapons like bows and crossbows, giving them the flexibility to adapt to different combat situations. Whether using a two-handed sword to deal devastating blows or wielding a shield and one-handed weapon to defend allies, Fighters can specialize in a variety of combat styles. Their ability to adapt to different weapons and strategies makes them effective in nearly any situation.

One of the key features of the Fighter is their high level of combat expertise, which allows them to make multiple attacks in a single turn. This is reflected in their "Extra Attack" feature, which grants them the ability to attack more than once during their turn, allowing them to deal massive damage in close combat. This makes Fighters exceptional at sustaining offensive pressure on enemies, especially when they can focus on single targets or multiple foes. As Fighters level up, their proficiency with weapons and combat maneuvers increases, allowing them to perform more specialized and devastating attacks.

In addition to their offensive capabilities, Fighters are also highly resilient. They are proficient in all forms of armor, from light armor to heavy plate, and they can use shields to bolster their defense. This makes Fighters difficult to hit and allows them to withstand heavy punishment on the battlefield. Their high hit points and ability to wear armor make them ideal front-line combatants who can draw the attention of enemies and protect more vulnerable party members. Additionally, Fighters can choose to specialize in certain combat techniques, like the "Protection" fighting style, which allows them to use their shield to defend their allies by imposing disadvantage on enemy attacks targeting them.

Fighters also have a range of tactical abilities that allow them to control the flow of battle. One such ability is "Action Surge," which allows Fighters to take an extra action on their turn, effectively doubling their potential for offense or defense in a single round. This ability makes Fighters highly effective in critical moments, where they can make a game-changing move to turn the tide of battle. "Second Wind" is another feature that gives Fighters the ability to heal themselves, granting them a boost of health when they need it most. This makes Fighters more sustainable in prolonged combat, as they can recover from damage and keep fighting.

The Fighter class offers multiple subclass options, called "Martial Archetypes," which further define their combat style and grant unique abilities. For example, the Champion archetype focuses on improving the Fighter's physical prowess, granting increased critical hit chances and the ability to deal more damage with simple, straightforward attacks. The Battle Master archetype, on the other hand, allows Fighters to use "maneuvers"—special techniques that can influence the battlefield by pushing, tripping, or disarming enemies, or even protecting allies. The Eldritch Knight archetype offers a blend of martial prowess and spellcasting, giving Fighters access to a limited selection of wizard spells to enhance their versatility and provide support in combat.

Fighters are also highly skilled at tactics and battlefield control. While they may not have access to the same variety of spells as other classes, they excel in strategic positioning and efficient execution of combat maneuvers. Fighters can focus on disabling enemies, protecting their allies, or securing objectives, using their physical abilities and tactical acumen to gain the upper hand. Their ability to take hits, deal sustained damage, and control the pace of battle makes them ideal for players who enjoy playing characters that focus on combat strategy and execution.

The Fighter is a straightforward class that excels in physical combat, offering high durability, multiple attack options, and tactical flexibility. They are best suited for players who enjoy high-impact, melee-focused gameplay and who want to take on a leading role in combat. Fighters are strong in both offense and defense, capable of adapting to various combat styles and situations. Whether charging into the thick of battle to deal damage, holding the front line to protect allies, or maneuvering around the battlefield with precision, Fighters are reliable and powerful combatants who can excel in any fight.

Overall, Fighters are ideal for players who want to focus on martial combat, whether it’s in close quarters with heavy weapons or ranged combat from a distance. They are suited for players who enjoy taking on the role of a strong, dependable warrior who can adapt to different combat situations and prove themselves on the battlefield. With their high endurance, diverse weaponry, and combat expertise, Fighters are a great choice for those who like to be in the heart of the action.
`);
  
    this.setChatBotMessage(message);
  } 

  monkHandler = () => {
    const message = this.createChatBotMessage(`
The Monk class in Baldur’s Gate 3 is a highly disciplined martial artist who harnesses the power of their mind, body, and spirit to achieve extraordinary physical feats. Monks are agile, fast, and incredibly versatile combatants who rely on their unarmed strikes, acrobatics, and the mystical energy known as Ki to enhance their abilities. They are experts in hand-to-hand combat, able to use their fists and feet to deliver rapid, devastating blows, while also tapping into supernatural powers to perform feats that seem impossible for mere mortals.

At the core of the Monk’s abilities is their Ki, a form of inner energy that they can channel to perform extraordinary actions. Ki allows Monks to perform special abilities like Flurry of Blows, which enables them to make multiple unarmed strikes in quick succession, dealing significant damage to their enemies. This makes them highly effective in combat, able to rapidly whittle down the health of foes with a flurry of attacks. Ki also powers other key Monk abilities, such as Step of the Wind, which allows them to dash or disengage as a bonus action, making them incredibly mobile and difficult to pin down.

Monks are also known for their exceptional mobility. Their agility and speed make them hard to hit, and they can use their high Dexterity to avoid damage and reposition quickly on the battlefield. Their unarmored defense, granted by their focus on agility and inner strength, allows them to use their Dexterity and Wisdom modifiers to determine their Armor Class (AC) instead of wearing heavy armor. This makes Monks more mobile than heavily armored classes while still being difficult to strike. Monks excel at darting in and out of combat, delivering strikes and avoiding enemy retaliation with their superior speed and evasion.

In addition to their mobility and unarmed combat prowess, Monks also possess a set of mystical abilities that make them more than just physical fighters. For example, the Monk can use the ability to Deflect Missiles, allowing them to catch or deflect incoming ranged projectiles. This makes them highly resilient against ranged attacks, able to close the gap with enemies and retaliate swiftly. They also have the ability to heal and recover using their Ki, allowing them to regain health without relying on potions or other magical healing. This makes them excellent at sustaining themselves in long battles.

Monks also have the unique ability to make their strikes more effective with their Martial Arts feature, which allows them to deal extra damage with unarmed strikes. As they level up, they can increase the number of attacks they make in a turn and even add additional effects to their strikes, such as stunning enemies or knocking them back. This combination of rapid attacks and tactical options makes the Monk a highly effective damage dealer, capable of taking down multiple enemies in a short amount of time.

The Monk’s connection to their Ki also allows them to perform powerful movements, such as the ability to run across walls, jump incredibly high, or perform high-speed strikes that leave enemies little time to react. These abilities not only enhance their combat effectiveness but also provide Monks with significant mobility in exploration, allowing them to traverse difficult terrain, avoid traps, or quickly close the distance between themselves and enemies.

Monks can choose from different subclasses, called "Monastic Traditions," which further define their style of combat and offer unique abilities. The Way of the Open Hand focuses on mastering unarmed combat, allowing the Monk to use their strikes to knock enemies prone, push them away, or even incapacitate them. This tradition emphasizes control and the ability to outmaneuver enemies in combat. The Way of Shadow grants the Monk powers tied to stealth and darkness, allowing them to teleport between shadows, move unseen, and strike with deadly precision. The Way of the Four Elements is a more mystical tradition that allows the Monk to harness elemental forces such as fire, water, earth, and air, using them to unleash powerful spells and manipulate the environment around them.

While the Monk excels at combat, their focus on agility, speed, and unarmed strikes means they are best suited for close-range combat. They are highly effective at darting in and out of the fray, using their martial arts and Ki-powered abilities to deal with multiple enemies at once. However, they do not specialize in ranged attacks or heavy weaponry, and their lack of armor means they can be vulnerable to certain types of damage, especially if they are caught off-guard or surrounded.

The Monk is ideal for players who enjoy fast-paced, tactical combat. They thrive on mobility, versatility, and precision, able to adapt to different situations and combat styles. Monks are best suited for players who want to focus on rapid, high-damage strikes, using their agility to avoid enemy blows and their Ki to perform powerful combat maneuvers. With their ability to heal, deflect projectiles, and deal with multiple enemies at once, Monks are a great choice for players who want a dynamic, action-packed playstyle that rewards skill and agility.

Overall, the Monk is a class for those who enjoy finesse and agility over brute strength. Their reliance on Ki and unarmed combat allows them to deal significant damage while remaining fast, mobile, and hard to hit. With a combination of rapid attacks, mystical abilities, and exceptional movement, Monks are perfect for players who enjoy a highly mobile, versatile character that can handle almost any situation with style and precision.
`);
  
    this.setChatBotMessage(message);
  } 

  paladinHandler = () => {
    const message = this.createChatBotMessage(`
The Paladin class in Baldur's Gate 3 is a noble and righteous warrior who draws strength from both their unwavering faith and their martial prowess. Paladins are holy knights bound by sacred oaths, combining the skills of a mighty fighter with divine magic to protect the innocent, vanquish evil, and uphold justice. Their divine connection allows them to heal wounds, smite foes with holy power, and shield their allies from harm. Paladins are often seen as paragons of virtue, determined to rid the world of corruption, protect the weak, and uphold the tenets of their chosen deity or cause.

One of the defining features of the Paladin is their divine magic, which sets them apart from other warriors. While they are primarily martial combatants, Paladins have access to a limited but potent set of spells granted to them by their deity or divine connection. These spells can heal allies, smite enemies with radiant energy, protect their companions, and even call down divine wrath on their foes. Paladins are particularly effective in support roles, capable of healing wounds and removing harmful conditions like poison or disease from themselves and their party members. Their divine magic is an essential part of their toolkit, allowing them to bolster their allies and stand firm against evil forces.

The Paladin's most iconic ability is their "Divine Smite," which allows them to expend a spell slot to deal extra radiant damage on a successful hit. This feature enables Paladins to deal devastating damage to their enemies, especially when they face fiends, undead, or other evil creatures. Divine Smite is a powerful tool for Paladins, allowing them to channel the holy energy of their deity to deliver powerful, punishing blows. It can turn the tide of battle, making the Paladin a formidable offensive force on the battlefield.

Paladins also have access to the "Aura of Protection," a feature that grants them and their nearby allies a bonus to saving throws equal to the Paladin's Charisma modifier. This ability allows Paladins to protect their party members from harmful effects, such as spells, poison, or environmental hazards. The Paladin’s strong presence on the battlefield, both in terms of defense and offense, makes them invaluable in any group, serving as a guardian for their allies while laying waste to enemies with their radiant smites.

In addition to their divine magic and combat abilities, Paladins are defined by their "Sacred Oaths," which are the core of their identity. When a Paladin is created, they swear an oath that shapes their path and determines the nature of their divine power. The Oath is a sacred bond, and Paladins who break their oath lose access to some of their divine powers. These oaths reflect the Paladin’s commitment to a particular cause or set of principles, such as protecting the innocent, vanquishing evil, or seeking justice. The Paladin’s oath can define their behavior, guiding them toward actions that align with their values and faith.

There are several Oaths that a Paladin can swear, each offering unique abilities and features. The Oath of Devotion is the most common and represents a commitment to justice, righteousness, and the protection of good. Paladins who take this oath gain abilities that enhance their combat prowess, protect allies, and punish those who would harm the innocent. The Oath of the Ancients represents a bond with the natural world, focused on the protection of life and the balance of nature. Paladins who swear this oath can harness the power of nature to heal wounds, protect their allies, and deal radiant damage to foes. The Oath of Vengeance is focused on punishing those who have committed great evils, such as murderers, tyrants, or villains. Paladins who follow this path are relentless in their pursuit of justice and can use their divine powers to hunt down and smite those who do evil. Each oath grants Paladins a set of unique features that reflect their particular devotion and powers.

Paladins also possess the "Lay on Hands" feature, which allows them to heal themselves or others by touching them. This healing ability is incredibly versatile, as it allows the Paladin to restore hit points to themselves or their allies at a moment’s notice. Lay on Hands can also be used to cure diseases or neutralize poisons, further cementing the Paladin’s role as a protector and healer. This ability makes Paladins exceptionally resilient, as they can sustain themselves and their allies through long battles and difficult encounters.

While Paladins are capable of standing toe-to-toe with enemies in physical combat, they are also a valuable support class. Their ability to heal, protect, and boost the effectiveness of their allies with spells and auras makes them a critical part of any adventuring party. They serve as both front-line warriors and divine protectors, capable of taking damage, delivering powerful strikes, and ensuring the safety of their companions.

In addition to their martial prowess and divine abilities, Paladins are often paragons of virtue and morality. Players who choose to play as a Paladin are expected to make decisions in line with their chosen oath, and the Paladin’s actions often reflect their deep sense of duty and responsibility. Paladins are not only powerful fighters but also moral beacons, representing the forces of good and justice in the world. This strong sense of right and wrong can lead to interesting role-playing moments, as Paladins must weigh their actions carefully and consider the consequences of their choices.

The Paladin class is best suited for players who enjoy a combination of combat and support roles. With their divine spells, healing abilities, radiant smites, and strong presence on the battlefield, Paladins are versatile and capable of handling a variety of situations. Whether charging into battle with a sword in hand or using divine magic to protect and heal allies, Paladins are ideal for players who enjoy playing characters with a strong moral compass, high durability, and the ability to lead their party through the most dangerous of situations.

Overall, Paladins are powerful, righteous warriors with a deep connection to their divine powers. They are the ideal class for players who want to combine combat with support, using both martial prowess and divine magic to protect the innocent and smite evil. With their strong sense of justice, healing abilities, and formidable combat skills, Paladins are a great choice for those who want to play a character who is as morally driven as they are physically powerful.
`);
  
    this.setChatBotMessage(message);
  } 


  rangerHandler = () => {
    const message = this.createChatBotMessage(`
The Ranger class in Baldur's Gate 3 is a versatile and resourceful warrior who excels in survival, exploration, and ranged combat. Rangers are skilled hunters and trackers, adept at navigating the wilds, hunting beasts, and protecting the natural world. They are highly independent, using their knowledge of the land and their connection to nature to outwit their enemies and survive in even the most hostile environments. Rangers are equally effective with bows, crossbows, and two-handed weapons, as well as in close combat when necessary. They also possess an innate understanding of the natural world, allowing them to communicate with animals, harness elemental forces, and tap into nature's power for both offensive and defensive purposes.

One of the defining features of the Ranger is their connection to nature, which allows them to gain abilities that enhance their survival skills and aid in the exploration of the wilderness. Rangers can track creatures over long distances, identify dangerous terrain, and find food and shelter in the wilds. They are excellent at remaining hidden, using stealth to avoid detection and take enemies by surprise. Rangers also have the ability to cast a limited number of spells, focusing on nature-based magic that can enhance their combat abilities, heal wounds, and protect the environment. Their spells are often focused on buffing their allies, controlling the battlefield, and interacting with the natural world in ways that make them highly adaptable in a variety of situations.

Rangers are exceptional marksmen, and their proficiency with ranged weapons is one of their key strengths. Their attacks with bows and crossbows are precise and deadly, allowing them to deal significant damage from a distance. As they level up, Rangers gain increased accuracy and additional attacks with their ranged weapons, making them formidable opponents in long-range combat. They are capable of quickly taking down enemies before they have a chance to close the distance, and they excel at picking off enemies one by one. Rangers can also use their Hunter's Mark ability, which allows them to mark a target and deal extra damage to it, making it easier for them to eliminate high-priority enemies on the battlefield.

In addition to their ranged combat prowess, Rangers are also skilled in close-quarters combat. They can wield two-handed weapons or dual-wield with finesse, making them versatile fighters who can adapt to any situation. Rangers are especially effective when fighting against specific types of enemies, thanks to their specialized combat skills and the ability to adapt their tactics based on their opponent. The Ranger’s "Favored Enemy" ability allows them to gain bonuses when fighting specific types of creatures, such as beasts, dragons, or undead. This makes them particularly effective at dealing with certain threats and excelling in particular environments.

The Ranger is also known for their animal companion, a loyal and powerful ally that assists them in battle and exploration. At a certain level, Rangers can form a bond with an animal companion, such as a wolf, bear, or hawk, which provides additional support in combat. The animal companion can attack enemies, assist in scouting, and provide utility in certain situations. The bond between the Ranger and their animal companion is strong, and the companion’s abilities can complement the Ranger’s own skills, making them a formidable team. The animal companion can also be a source of role-playing opportunities, as the Ranger develops a deep connection with their animal ally, which can influence their decisions and actions.

Rangers also have the ability to choose a subclass, known as an "Archetype," which further defines their combat style and abilities. The Hunter archetype is focused on versatility and adaptability, allowing Rangers to choose different combat tactics based on the situation. This archetype grants abilities that enhance the Ranger's ability to track and hunt down enemies, deal with multiple targets, and enhance their ranged combat effectiveness. The Beast Master archetype is centered around the animal companion, allowing Rangers to strengthen their bond with their companion and gain unique abilities that enhance the companion’s powers in battle. Rangers who choose this path can command their animal companion to perform special actions, such as attacking multiple enemies or using their senses to locate hidden threats. The Gloom Stalker archetype is tied to darkness and stealth, allowing Rangers to move unseen in the shadows, deal extra damage in low-light conditions, and become a master of ambushes and surprise attacks. This archetype is ideal for players who prefer a more stealth-focused playstyle and enjoy striking from the shadows.

In addition to their combat abilities, Rangers are also skilled survivalists. They can use their "Primeval Awareness" ability to track creatures and learn about their environment, and they are adept at navigating difficult terrain, avoiding traps, and surviving harsh conditions. Rangers are often called upon to protect settlements from dangerous creatures, scout ahead on journeys, and explore the wilds in search of resources or hidden threats. They are at home in the wilderness, where their connection to nature gives them a significant advantage over those who are less attuned to the land.

Rangers are often the best choice for players who enjoy a combination of ranged combat, tactical versatility, and a deep connection to nature. Their ability to deal significant damage from a distance, track and hunt enemies, and survive in harsh environments makes them ideal for exploration and combat. Whether providing support with their spells and animal companions or engaging enemies from afar with precise shots, Rangers offer a dynamic and adaptable playstyle that rewards strategy and preparation.

Overall, the Ranger class is perfect for players who enjoy exploring the world, hunting dangerous creatures, and using their skills to survive in the wilds. With their versatile combat abilities, animal companions, and connection to nature, Rangers are great for players who want a highly adaptable and strategic character that can handle a wide range of challenges. Whether in the heat of battle, navigating dangerous terrain, or tracking down elusive enemies, the Ranger is a versatile and powerful class that offers a rich and rewarding playstyle.
`);
  
    this.setChatBotMessage(message);
  } 

  rogueHandler = () => {
    const message = this.createChatBotMessage(`
The Rogue class in Baldur's Gate 3 is a highly versatile and cunning character known for their agility, stealth, and quick thinking. Rogues excel at sneaking around, striking from the shadows, and manipulating their enemies to gain the upper hand. Whether they are picking locks, disarming traps, or assassinating foes with precision, Rogues are the masters of subtlety and surprise. They are incredibly effective in situations that require finesse, dexterity, and a sharp mind, and they thrive when using their cunning to outsmart their enemies.

One of the key traits of the Rogue is their proficiency in stealth and sneaking. Rogues can move silently and remain undetected by enemies, allowing them to gather information, set up ambushes, or bypass dangerous areas. This stealthy approach makes them exceptional scouts and spies, able to infiltrate enemy strongholds or sneak past sentries without raising alarm. When they do strike, Rogues can do so with deadly efficiency, using their superior speed and precision to deal massive damage before their enemies even know they are there. Their ability to move in and out of combat quickly, without getting caught in prolonged fights, is one of their defining features.

A hallmark of the Rogue’s combat abilities is their Sneak Attack. This ability allows them to deal extra damage when they have an advantage over their target, such as when an enemy is distracted or unaware of the Rogue’s presence. Sneak Attack makes Rogues deadly in combat, as they can easily exploit openings to deal devastating blows. This ability scales with the Rogue’s level, allowing them to deal more damage as they progress, making them one of the most dangerous classes when it comes to high-damage, precision strikes.

Rogues are also highly skilled at using a wide variety of tools and abilities outside of combat. They are experts in skills such as lockpicking, trap disarming, and sleight of hand, which makes them invaluable in situations where delicate or covert work is required. Their Thieves’ Tools, for instance, allow them to open locked doors, chests, and containers that other classes would struggle to access. Additionally, their expertise in detecting and disarming traps gives them an edge when navigating dangerous environments, ensuring that they can bypass hazards and continue their missions unscathed.

Another important aspect of the Rogue is their ability to be nimble in combat. Rogues have excellent Dexterity, which grants them high mobility and the ability to avoid attacks. Their high Dexterity also makes them deadly with ranged weapons, such as shortbows or hand crossbows, and they can dish out precise attacks while remaining out of reach. This makes the Rogue a formidable opponent who can take on multiple enemies at once, darting in and out of combat with lightning speed.

Rogues are highly flexible when it comes to combat styles, as they can specialize in a variety of weapons and approaches. They are equally adept with finesse weapons, like daggers and rapiers, and ranged weapons, like bows and crossbows. This flexibility allows players to customize their Rogue to fit their preferred playstyle. They can choose to focus on stealth and assassination, becoming masters of hiding and striking from the shadows, or they can opt for a more swashbuckling approach, using their agility to outmaneuver enemies and deliver rapid strikes in combat.

The Rogue class also offers a choice of subclasses, which further defines their playstyle. The Thief archetype focuses on enhancing the Rogue's already impressive abilities in stealth, thievery, and dexterity. Thieves gain additional tools and tricks, such as the ability to use their bonus actions more effectively and gain extra movement speed, making them even more elusive and efficient in their missions. The Assassin archetype is built around dealing massive damage with precision strikes, making them perfect for players who enjoy sneaking up on their enemies and eliminating them with brutal efficiency. Assassins gain additional benefits when attacking surprised enemies, making them especially dangerous when striking from the shadows or ambushing their foes. The Arcane Trickster archetype adds a magical twist to the Rogue’s abilities, allowing them to cast spells that enhance their combat or provide utility in various situations. This subclass gives the Rogue access to illusion and enchantment spells, allowing them to manipulate their enemies, control the battlefield, or become even harder to detect.

Rogues are also known for their resourcefulness and adaptability. They can quickly assess situations and use their skills to turn the tide of battle or navigate tricky situations. Their ability to act quickly, think on their feet, and exploit weaknesses in their enemies makes them highly effective in both combat and non-combat scenarios. Whether it's sneaking past guards, picking pockets, or dealing devastating sneak attacks, Rogues excel in taking advantage of every opportunity.

As the Rogue progresses in level, they gain additional abilities that make them even more versatile. They can gain the Cunning Action feature, which allows them to take bonus actions to Dash, Disengage, or Hide, providing them with even more mobility and control in combat. This makes Rogues incredibly hard to pin down and gives them the ability to maneuver around the battlefield with ease. At higher levels, Rogues gain the ability to use their Evasion to avoid area-of-effect damage, making them even more resilient to spells or traps that would otherwise harm them.

Overall, the Rogue is a highly adaptable and strategic class, perfect for players who enjoy stealth, precision, and outsmarting their enemies. Their ability to deal massive damage, avoid detection, and manipulate the environment around them makes them an excellent choice for players who prefer a more tactical and resourceful playstyle. Whether it’s sneaking through a dungeon, picking the lock to a treasure chest, or eliminating enemies one by one with deadly precision, Rogues thrive in situations that demand cunning, agility, and expertise.
`);
  
    this.setChatBotMessage(message);
  } 


  sorcererHandler = () => {
    const message = this.createChatBotMessage(`
The Sorcerer class in Baldur's Gate 3 is a master of raw, innate magic, drawing power from an inherent source within themselves. Unlike Wizards, who learn magic through study and preparation, Sorcerers are born with their magical abilities, often due to a unique bloodline or mystical event that altered their very nature. They channel powerful arcane forces instinctively, relying on their connection to these forces rather than the meticulous study of spellbooks. Sorcerers are able to cast spells with incredible flexibility and ease, making them one of the most potent and unpredictable magic users in the game.

At the heart of the Sorcerer’s power is their spellcasting ability, which relies on Charisma as their primary stat. This reflects their natural charm and force of personality, with their magic flowing through them as an extension of their will. Their spellcasting is both intuitive and spontaneous, giving them the ability to cast a wide range of spells with minimal preparation. Sorcerers do not need to memorize their spells in advance like Wizards; instead, they can use their spells more freely, adapting to the flow of combat or events without the need for preparation. This makes them highly flexible in battle, able to react to changing circumstances with quick and decisive spells.

Sorcerers have a limited number of spells they can learn compared to other spellcasting classes, but they make up for this by being able to cast their spells more frequently. Their spell slots regenerate after short or long rests, allowing them to cast spells at will without worrying about running out of resources. This makes Sorcerers highly capable in prolonged encounters, able to maintain a consistent output of magical power throughout the battle.

One of the defining features of the Sorcerer class is their Sorcerous Origin, which determines the source of their magical abilities and grants them unique powers. The two most common Sorcerous Origins are Draconic Bloodline and Wild Magic. The Draconic Bloodline connects the Sorcerer to a powerful dragon ancestor, granting them enhanced physical resilience, increased spellcasting power, and the ability to manipulate elemental forces. Sorcerers with this origin gain resistance to a specific damage type based on their dragon lineage, such as fire or cold damage, and they can eventually take on draconic traits, such as gaining a breath weapon or wings.

On the other hand, Sorcerers who follow the Wild Magic origin are unpredictable and chaotic, drawing their magic from the raw forces of chaos. Wild Magic Sorcerers can trigger random magical surges, causing unexpected effects that can either benefit or harm their allies. This unpredictability adds an element of excitement to the Sorcerer’s gameplay, as they can occasionally unleash powerful and surprising effects that can turn the tide of battle in their favor—or create havoc. These Wild Magic Surges are a signature feature of this origin, and while they can be dangerous, they also provide an exciting layer of uncertainty that rewards daring players.

In addition to their Sorcerous Origin, Sorcerers have the ability to Metamagic, a feature that allows them to manipulate their spells in various ways. Metamagic provides Sorcerers with the ability to alter the characteristics of their spells, such as casting them faster, making them more powerful, or even targeting additional creatures. This makes Sorcerers highly adaptable in combat, as they can tailor their spells to fit their needs. For example, a Sorcerer can use the "Twinned Spell" Metamagic to cast a spell on two creatures at once, or they can use "Quickened Spell" to cast a spell with a bonus action instead of an action, allowing them to cast additional spells in a single turn. Metamagic allows Sorcerers to be highly efficient and devastating in combat, letting them manipulate their spellcasting to outpace and outsmart their opponents.

Sorcerers are also known for their potent offensive capabilities. Their spells tend to focus on dealing significant damage, manipulating the battlefield, and controlling enemies. Whether they are casting fireballs that incinerate entire groups of enemies, hurling lightning bolts that strike down foes from a distance, or casting powerful enchantments to control or debilitate their enemies, Sorcerers are a force to be reckoned with. Their spells tend to be highly effective at disrupting enemy plans, dishing out massive damage, or providing utility in tight situations. Sorcerers are incredibly effective in ranged combat, using their spells to strike from a distance and avoid getting close to enemies who might pose a physical threat.

Although they are not the most resilient in terms of defense, Sorcerers can compensate with their sheer offensive capabilities and their ability to manipulate magic to protect themselves. For example, they can cast defensive spells like "Shield" to protect themselves from incoming attacks or "Mage Armor" to increase their Armor Class. While Sorcerers tend to be more vulnerable in close combat, their ability to control the flow of battle with powerful spells and clever use of Metamagic allows them to stay out of harm’s way. They excel at dealing damage from a safe distance, relying on their high Charisma and magical prowess to stay in control of the fight.

As Sorcerers level up, they gain more control over their magic, unlocking powerful spells that can have devastating effects on the battlefield. They can eventually learn to cast spells of the highest tier, including wish-granting magic, weather-altering spells, and catastrophic damage-dealing spells that can reshape the very fabric of reality. With their expanding spellcasting abilities, Sorcerers become increasingly capable of influencing battles in ways other classes cannot match.

The Sorcerer is an excellent class for players who enjoy casting powerful, spontaneous spells and revel in the excitement of unleashing raw magical energy. Whether you want to control the battlefield with destructive spells, manipulate the flow of combat with Metamagic, or tap into your innate magical potential, the Sorcerer is the perfect class for players who enjoy versatility, power, and an intuitive approach to spellcasting. Their combination of raw damage output, magical flexibility, and unique origins makes them a thrilling and dynamic class to play, capable of shaping the outcome of any encounter.
`);
  
    this.setChatBotMessage(message);
  } 

  warlockHandler = () => {
    const message = this.createChatBotMessage(`
The Warlock class in Baldur's Gate 3 is a unique and intriguing spellcaster, drawing their magical abilities from a pact with a powerful and often otherworldly patron. Unlike Wizards or Sorcerers, who rely on their own innate magical talents or studied spellcasting, Warlocks owe their power to a supernatural entity, which could range from ancient and enigmatic beings like archfey or fiends, to the cosmic powers of Great Old Ones. This pact with their patron grants Warlocks a source of magic that is both potent and, often, mysterious in nature.

One of the core aspects of the Warlock class is the idea of a pact. A Warlock’s magic is fueled by a covenant with their chosen patron, and the nature of that patron influences the Warlock’s powers and abilities. This makes the Warlock an intriguing choice for players who enjoy role-playing characters with a rich backstory, as their connection to their patron often shapes their motivations, personality, and interactions with the world. Warlocks may gain different boons, abilities, and spells based on their patron, creating a versatile class that can take on many different forms depending on the nature of their pact.

At the heart of the Warlock’s power is their spellcasting ability, which relies on Charisma as their primary stat. This reflects the Warlock’s force of will and their ability to channel the eldritch and arcane energies granted by their patron. While Warlocks have fewer spell slots compared to other spellcasters, they are able to regain them on a short rest, making them an ideal class for sustained engagements or encounters that require frequent use of magic. Warlocks are capable of casting a variety of spells, with a focus on those that cause lasting effects or control the battlefield. Their spells often emphasize manipulation, deception, and overwhelming their enemies with arcane energy.

One of the signature abilities of the Warlock is their Eldritch Blast, a cantrip that becomes their primary ranged offensive spell. Eldritch Blast is a forceful energy attack that grows in power as the Warlock gains levels, making it an incredibly reliable and scalable damage-dealing option. This cantrip makes the Warlock a formidable opponent, capable of engaging enemies from a distance without needing to rely on higher-level spell slots. As they level up, Warlocks can enhance their Eldritch Blast through various invocations, allowing it to target multiple enemies or increase its damage output.

The Warlock’s spellcasting is highly customizable thanks to Eldritch Invocations, which are special abilities that enhance their spells or grant unique abilities outside of the typical spellcasting scope. These invocations allow Warlocks to modify their magic in various ways, such as increasing the potency of their spells, allowing them to cast certain spells at will, or providing them with useful abilities like the ability to see in the dark or resist certain damage types. Invocations offer a great deal of flexibility and versatility, allowing Warlocks to tailor their abilities to suit their preferred playstyle, whether they prefer to deal damage, control the battlefield, or provide utility to their allies.

Warlocks also have the ability to choose a Patron at the start of their journey, which significantly influences their abilities. The choice of patron grants the Warlock access to specific spells and features that reflect their bond with their patron. Common patrons include:

The Fiend – A pact with a devil or demon, granting the Warlock abilities that manipulate fire and brimstone, as well as powers that enhance their survivability, such as healing when enemies die. Warlocks who follow this path often become formidable in both offense and defense, drawing upon their infernal connection to unleash devastating magic.

The Archfey – A pact with fey creatures, granting the Warlock access to enchantment and illusion spells. This path often leads to a more trickster-like character, who can manipulate the minds of their enemies and play with the very fabric of reality. Archfey Warlocks can also gain abilities that protect them from being charmed or frightened, allowing them to retain their control in high-stress situations.

The Great Old One – A pact with an ancient, unknowable cosmic entity. Warlocks who follow this path gain access to powerful psychic and mind-affecting spells, often focused on confusion, fear, and control. These Warlocks can also develop telepathic abilities, allowing them to communicate directly with other beings, regardless of distance, and manipulate the minds of their enemies in subtle ways.

The Celestial – A pact with a celestial being, such as an angel or divine force. This pact grants the Warlock healing and protective powers, along with the ability to summon radiant energy to smite foes. Warlocks who choose this path may find themselves more focused on support roles, offering healing and protection to their allies while still maintaining the ability to deal radiant damage to their enemies.

In addition to their spellcasting abilities, Warlocks possess the Pact Magic feature, which is a specific form of magic that grants them the ability to cast spells that are different from those cast by other classes. Warlocks have access to a small but potent list of spells that they can cast using their pact magic slots, with a focus on damage-dealing, utility, and control. This feature allows them to continue to be a formidable magical presence throughout combat, even when their other spells are on cooldown.

Another key feature of the Warlock class is their Pact Boon, which grants the Warlock a special ability that further defines their role in combat. The three main types of Pact Boons are:

Pact of the Chain – The Warlock forms a connection with a familiar, a magical creature that can aid them in battle or provide utility. This familiar can be a tiny imp, quasit, or other creatures, and it can scout, deliver touch spells, or provide advantages in various situations.

Pact of the Blade – The Warlock gains the ability to summon a magical weapon and become a powerful melee fighter. This pact allows the Warlock to use their Charisma for weapon attacks, making them a viable choice for those who want to focus on close combat while maintaining their spellcasting abilities.

Pact of the Tome – The Warlock receives a book of magical knowledge, granting them access to additional spells that they can cast. This pact increases the Warlock's spellcasting versatility, allowing them to access a wide variety of magical abilities.

Warlocks are highly adaptable, able to focus on damaging enemies with powerful spells, manipulating the battlefield with control magic, or providing utility through their pact abilities and invocations. As a Warlock, you can build a character that suits your preferred playstyle, whether you prefer to be a master of offensive magic, a manipulator of minds, or a versatile caster who can adapt to any situation.

Overall, the Warlock is a fascinating and dynamic class, perfect for players who enjoy a mix of magical prowess, strategic thinking, and a strong narrative connection to their patron. Whether you want to strike fear into the hearts of enemies, wield destructive eldritch magic, or manipulate the minds of those around you, Warlocks offer a wealth of possibilities for creating a character with both power and mystery.

`);
  
    this.setChatBotMessage(message);
  } 

  wizardHandler = () => {
    const message = this.createChatBotMessage(`
The Wizard class in Baldur's Gate 3 is one of the most iconic and versatile spellcasting classes in the game. Wizards are masters of the arcane arts, capable of harnessing the raw forces of magic to shape reality itself. Unlike Sorcerers, who rely on innate power, or Warlocks, who draw on supernatural patrons, Wizards are scholars who have dedicated their lives to studying magical theory and accumulating vast stores of knowledge. This makes Wizards extremely powerful, but also fragile and dependent on preparation and careful planning.

Wizards rely on Intelligence as their primary ability score, reflecting their deep understanding of the intricacies of magic. Their spells are not cast from innate abilities but are learned from spellbooks and scrolls. This gives Wizards a high degree of flexibility and customization, as they can choose their spells each day from a list they have prepared. The ability to change their spell selection each day makes Wizards adaptable to a variety of situations, able to alter their tactics based on the challenges they expect to face.

Wizards are known for their vast spellcasting repertoire, which includes some of the most powerful and game-changing spells in Baldur's Gate 3. They have access to a wide range of schools of magic, such as Evocation, Conjuration, Necromancy, and Enchantment, to name a few. Each of these schools of magic allows Wizards to specialize in different types of spells, from offensive fireballs to summoning creatures, controlling the minds of enemies, or even manipulating time and space. The key to mastering the Wizard is understanding the strengths and weaknesses of each school and carefully selecting spells that complement one another.

Wizards have Spellcasting as a core feature, which grants them the ability to cast spells using their Intelligence modifier. Unlike other spellcasters, Wizards do not have a fixed list of known spells. Instead, they must prepare their spells ahead of time by choosing them from the spells they have recorded in their spellbook. This preparation requires careful thought, as a Wizard can only prepare a limited number of spells each day based on their level and Intelligence modifier. This means that Wizards must plan ahead and think strategically, as they must decide which spells to keep for the upcoming adventure, knowing that their choices will limit their options during combat and other challenges.

One of the Wizard's most powerful features is the Arcane Recovery, which allows them to regain some of their expended spell slots during a short rest. This feature gives Wizards a form of sustained magical power, enabling them to keep casting spells and supporting their allies over extended periods, unlike other classes that rely solely on long rests to recover their spell slots.

At higher levels, Wizards gain access to Arcane Tradition, which represents their specialization in one of the many schools of magic. The choice of Arcane Tradition can significantly impact the Wizard’s playstyle and the kinds of spells and abilities they can access. Some of the notable Arcane Traditions include:

School of Evocation – Wizards who specialize in Evocation focus on spells that deal damage, such as Fireball, Lightning Bolt, and Cone of Cold. They excel at dealing massive area-of-effect damage to enemies, making them ideal for clearing out groups of foes. This tradition also grants the Wizard enhanced control over their damaging spells, allowing them to minimize friendly fire and focus their damage where it’s needed most.

School of Enchantment – Wizards of this school specialize in manipulating the minds of others. They gain access to powerful spells like Charm Person, Hold Person, and Dominate Person, which allow them to control or influence enemies. Wizards of the Enchantment school can be incredibly effective in social encounters or controlling the battlefield, turning enemies into allies or making them helpless in the face of the Wizard’s power.

School of Necromancy – Necromancers delve into the dark arts of death and decay, gaining powers that manipulate life forces. They can raise the dead to serve as their minions, drain the life force of their enemies, and curse their foes with debilitating effects. Necromancers often have the ability to heal themselves by draining the vitality of others, making them powerful both offensively and defensively. Their connection to death and the undead can also grant them unique interactions with certain enemies.

School of Abjuration – Wizards who follow the School of Abjuration specialize in protective and defensive magic. They excel at creating magical barriers, protecting themselves and their allies from harm. Abjurers are great at shutting down enemy spellcasters and providing crucial protection during combat. Their spells often grant resistance to damage or negate harmful effects, making them invaluable in tougher encounters.

School of Transmutation – Transmuters are masters of changing the very nature of things. Whether they’re transforming one substance into another or enhancing the physical abilities of their allies, Transmutation wizards are highly versatile. They can turn lead into gold, transmute enemies into harmless creatures, or grant themselves or their allies greater physical power, speed, and resilience.

In addition to their Arcane Tradition, Wizards also gain Ritual Casting, allowing them to cast certain spells as rituals without expending a spell slot. This is a major boon for Wizards, as it allows them to perform useful magical tasks, such as Detect Magic or Comprehend Languages, outside of combat without draining their resources.

Wizards’ Cantrips are another important part of their magical arsenal. These are simple, low-level spells that can be cast at will and do not consume spell slots. Cantrips allow Wizards to contribute in combat without worrying about running out of spell slots. Popular cantrips include Fire Bolt for ranged damage, Mage Hand for manipulation of objects, and Minor Illusion for trickery and distraction. Cantrips provide Wizards with a reliable means of dealing with minor threats and performing utility tasks.

While Wizards have incredible potential for magical destruction and control, they do have certain vulnerabilities. Wizards are typically physically frail and rely heavily on their spells for protection. They lack the resilience and durability of melee classes like Fighters or Barbarians, and their low hit points make them vulnerable in direct combat. Wizards must be careful about positioning and strategy, as they can be quickly overwhelmed if caught in close quarters with enemies. This makes them ideal for players who enjoy tactical combat, preferring to stay at range and use their spells to shape the battlefield rather than engage in melee combat.

Overall, the Wizard is a powerful and versatile class suited for players who enjoy a complex and strategic playstyle. With access to a vast array of spells, the ability to customize their magic through Arcane Traditions, and the option to prepare a new set of spells each day, Wizards are one of the most flexible and powerful classes in Baldur’s Gate 3. They excel at solving problems both inside and outside of combat, whether by blasting enemies with devastating spells, manipulating the environment, or controlling the minds of their foes. If you enjoy mastering magic, solving complex problems with your spells, and taking a careful, calculated approach to every challenge, the Wizard is a perfect class for you.

`);
  
    this.setChatBotMessage(message);
  } 

   helpHandler = () => {
    const message = this.createChatBotMessage("For information about classes, type class name: Barbarian, Bard, Cleric, Druid, Fighter, Monk, Paladin, Ranger, Rogue, Sorcerer, Warlock, Wizard");
    this.setChatBotMessage(message);
   }

   setChatBotMessage = (message) => {
    this.setState(state => ({...state, messages: [...state.messages, message]}))
   }

 }
 
 export default ActionProvider;