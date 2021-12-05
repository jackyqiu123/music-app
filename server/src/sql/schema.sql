-- NOTE: I figured we'd want this for the section on SQL
PRAGMA foreign_keys;

-- NOTE: For the SQL assignment, we could have them normalize
-- this database farther. Perhaps they can learn about SERIAL and
-- then go implement a way to change a room_name without losing
-- references by using a FOREIGN KEY into a rooms table with an 
-- int primary key.

CREATE TABLE songs (
	id int NOT NULL PRIMARY KEY,
	song_title text NOT NULL,
	notes varchar NOT NULL
);

INSERT INTO songs (id, song_title, notes) 
VALUES (1, 'Ode to Joy (Dubstep Remix)', 'E4 E4 F4 G4 G4 F4 E4 D4 C4 C4 D4 E4 E4 D4 D4');
INSERT INTO songs (id, song_title, notes) 
VALUES (2, 'Two tigers', 'C4 D4 E4 C4 C4 D4 E4 C4 E4 F4 G4.5 E4 F4 G4.5 Gb4 A4 G4 Fb4 E4 C4 Gb4 A4 G4 Fb4 E4 C4 E4 G3 C4.5 E4 G3 C4.5');
INSERT INTO songs (id, song_title, notes) 
VALUES (3, "Twinkle Twinkle Little Star", 'F4 F4 C5 C5 D5 D5 C5.5 Bb4 Bb4 A4 A4 G4 G4 F4.5 C5 C5 B4 B4 A4 A4 G4.5 D5 D5 C5 C5 B4 B4 A4.5 F4 F4 C5 C5 D5 D5 C5.5 Bb4 Bb4 A4 A4 G4 G4 F4.5');

INSERT INTO songs (id, song_title, notes) 
VALUES (4, "Jingle Bells", 'G4 G4 G4 E5 D5 C5 G4.5 G4 G4 G4 E5 D5 C5 A4.5 A4 B4 F5 E5 D5 C5.5 C5 G5 G5 F5 D5 E5.5 G4 G4 G4 E5 D5 C5 G4.5 G4 G4 G4 E5 D5 C5 A4.5 A4 B4 F5 E5 D5 G5 G5 G5 G5 A5 G5 F5 D5 C5.5 G5 E5 E5 E5.5 E5 E5 E5.5 E5 G5 C5 D5 E5.5 E5.5 F5 F5 F5 F5 F5 E5 E5 E5 E5 E5 D5 D5 E5 D5.5 G5.5 E5 E5 E5.5 E5 E5 E5.5 E5G5 C5 D5 E5.5 E5 F5 F5 F5 F5 F5 E5 E5 E5 E5 G5 G5 F5 D5 C5.5');

INSERT INTO songs (id, song_title, notes)
VALUES (5,'I am a Little Painter', 'G4 E4 G4 E4 G4 E4 C4 D4 F4 E4 D4 G4 G4 E4 G4 E4 G4 E4 C4 D4 F4 E4 D4 G4 C4 D4 D4 F4 F4 E4 C4 G4 D4 F4 E4 D4 G4 G4 E4 G4 E4 G4 E4 C4 D4 F4 E4 D4 C4');
INSERT INTO songs (id, song_title, notes)
VALUES (6,'蜜雪冰城', 'E5 G5 G5 A5 G5 E5 C5 C5 D5 E5 E5 D5 C5 D5 E5 G5 G5 A5 G5 E5 C5 C5 D5 E5 E5 D5 C5');

INSERT INTO songs (id, song_title, notes)
VALUES (7,'Star Spangled Banner', 'G5 E4 C4 E4 G4 C5 E5 D5 C5 E4 F#4 G4 G4 G4 E5 D5 C5 B4 A4 B4 C5 C5 G4 E4 C4');


