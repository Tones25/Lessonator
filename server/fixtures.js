if (Videos.find().count() === 0) { var now = new Date().getTime();
	//indexing these text fields allows full text search
	Videos._ensureIndex({title: 'text', tags: 'text'});
	Videos.insert({
		_id: 'vh5dnGZhtSM',
		title: 'Train Beat Patters',
		tags: 'country, guitar, train beat',
		rating: 1,
		numOfRatings: 5,
		submitted: new Date(now - 1 * 3600 * 1000),
		flaged: false,
		flagType: {
			notLesson: 0,
			badTitle: 0,
			badTags: 0,
		},
	});

	Videos.insert({
		_id: 'LhrGeolItvw',
		title: 'CAGED System Explained',
		tags: 'guitar, theory, chords',
		rating: 3,
		numOfRatings: 1,
		submitted: new Date(now - 2 * 3600 * 1000),
		flaged: false,
		flagType: {
			notLesson: 0,
			badTitle: 0,
			badTags: 0,
		},
	});

	Videos.insert({
		_id: '3TGDIOT6c0A',
		title: 'Practice Techniques for the Intermediate Player',
		tags: 'practice, guitar, technique, intermediate',
		rating: 2,
		numOfRatings: 3,
		submitted: new Date(now - 3 * 3600 * 1000),
		flaged: false,
		flagType: {
			notLesson: 0,
			badTitle: 0,
			badTags: 0,
		},
	});

	Videos.insert({
		_id: 'D7jV50wt-e0',
		title: 'Ten Basic Lead Guitar Moves',
		tags: 'guitar, lead, scales',
		rating: 4,
		numOfRatings: 2,
		submitted: new Date(now - 4 * 3600 * 1000),
		flaged: false,
		flagType: {
			notLesson: 0,
			badTitle: 0,
			badTags: 0,
		},
	});

	Videos.insert({
		_id: 'O-aD2ddAG6s',
		title: 'Seven Beats Every Drummer Should Know',
		tags: 'drums, beats, basics',
		rating: 5,
		numOfRatings: 1,
		submitted: new Date(now - 5 * 3600 * 1000),
		flaged: false,
		flagType: {
			notLesson: 0,
			badTitle: 0,
			badTags: 0,
		},
	});
	Videos.insert({
		_id: '2d7PDJqfia0',
		title: 'How To Build Hand Speed: Tony Royster Jr',
		tags: 'drums, technique, speed',
		rating: 0,
		numOfRatings: 0,
		submitted: new Date(now - 6 * 3600 * 1000),
		flaged: false,
		flagType: {
			notLesson: 0,
			badTitle: 0,
			badTags: 0,
		},
	});
	Videos.insert({
		_id: '8T-85IbmuxE',
		title: 'Applying Rudiments to the Whole Drum Set',
		tags: 'drums, technique',
		rating: 0,
		numOfRatings: 0,
		submitted: new Date(now - 7 * 3600 * 1000),
		flaged: false,
		flagType: {
			notLesson: 0,
			badTitle: 0,
			badTags: 0,
		},
	});
	Videos.insert({
		_id: 'rXq5WcasEdc',
		title: 'Basic Rock Improvisation',
		tags: 'guitar, rock, soloing',
		rating: 0,
		numOfRatings: 0,
		submitted: new Date(now - 7 * 3600 * 1000),
		flaged: false,
		flagType: {
			notLesson: 0,
			badTitle: 0,
			badTags: 0,
		},
	});
	Videos.insert({
		_id: 'zqUv8uPDneo',
		title: 'Pentatonic Rock Rhythm',
		tags: 'guitar, rock, Rhythm',
		rating: 0,
		numOfRatings: 0,
		submitted: new Date(now - 7 * 3600 * 1000),
		flaged: false,
		flagType: {
			notLesson: 0,
			badTitle: 0,
			badTags: 0,
		},
	});
	Videos.insert({
		_id: 'Qsm0wOmgIuw',
		title: 'Straight Vs Swing',
		tags: 'bass, beginner',
		rating: 0,
		numOfRatings: 0,
		submitted: new Date(now - 7 * 3600 * 1000),
		flaged: false,
		flagType: {
			notLesson: 0,
			badTitle: 0,
			badTags: 0,
		},
	});
	Videos.insert({
			_id:"IDgbfmT8hcM",
			title:'\"That\" Pentatonic Lick\"',
			tags:"bass, pentatonic, lick, solo",
			rating: 0,
			numOfRatings: 0,
			submitted: new Date(now - 7 * 3600 * 1000),
			flaged: false,
			flagType: {
				notLesson: 0,
				badTitle: 0,
				badTags: 0,
			}
		});
	Videos.insert({
			_id:"pYkLG0KoUfM",
			title:'Slap bass lesson',
			tags:"bass, slap, technique",
			rating: 0,
			numOfRatings: 0,
			submitted: new Date(now - 7 * 3600 * 1000),
			flaged: false,
			flagType: {
				notLesson: 0,
				badTitle: 0,
				badTags: 0
			}
		});
	Videos.insert({
			_id:"Ff5b3-D3Hs0",
			title:'Introducing Arpeggios',
			tags:"bass, Arpeggios, Arpeggio, solo, lick",
			rating: 0,
			numOfRatings: 0,
			submitted: new Date(now - 7 * 3600 * 1000),
			flaged: false,
			flagType: {
				notLesson: 0,
				badTitle: 0,
				badTags: 0
			}
		});
	Videos.insert({
			_id: "xXT9mirsfgk",
			title:'Improvising over Jazz Chords',
			tags:"Improvising, jazz, chords, progression",
			rating: 0,
			numOfRatings: 0,
			submitted: new Date(now - 7 * 3600 * 1000),
			flaged: false,
			flagType: {
				notLesson: 0,
				badTitle: 0,
				badTags: 0
			}
		});
	Videos.insert({
			_id:"CpBfY0UbIUQ",
			title:'swing jazzy blues guitar ',
			tags:"swing, jazz, blues",
			rating: 0,
			numOfRatings: 0,
			submitted: new Date(now - 7 * 3600 * 1000),
			flaged: false,
			flagType: {
				notLesson: 0,
				badTitle: 0,
				badTags: 0
			}
		});
	Videos.insert({
			_id:"g96eih4FLgI",
			title:'working with a loop pedal',
			tags:"loop, pedal, jazz",
			rating: 0,
			numOfRatings: 0,
			submitted: new Date(now - 7 * 3600 * 1000),
			flaged: false,
			flagType: {
				notLesson: 0,
				badTitle: 0,
				badTags: 0
			}
		});

	for(var i = 0; i< 30; i++) {
		Videos.insert({
		_id: 'v' + i,
		title: 'v' + i,
		tags: 'bass, beginner',
		rating: 0,
		numOfRatings: 0,
		submitted: new Date(now - 7 * 3600 * i *5),
		flaged: false,
		flagType: {
			notLesson: 0,
			badTitle: 0,
			badTags: 0,
		},
	});
	}
}



