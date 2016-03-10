if (Videos.find().count() === 0) {
	Videos._ensureIndex({title: 'text', tags: 'text'});
	Videos.insert({
		ytId: 'vh5dnGZhtSM',
		title: 'Train Beat Patters',
		tags: 'country, guitar, train beat',
	});

	Videos.insert({
		ytId: 'LhrGeolItvw',
		title: 'CAGED System Explained',
		tags: 'guitar, theory, chords',
	});

	Videos.insert({
		ytId: '3TGDIOT6c0A',
		title: 'Practice Techniques for the Intermediate Player',
		tags: 'practice, guitar, technique, intermediate',
	});

	Videos.insert({
		ytId: 'D7jV50wt-e0',
		title: 'Ten Basic Lead Guitar Moves',
		tags: 'guitar, lead, scales',
	});

	Videos.insert({
		ytId: 'O-aD2ddAG6s',
		title: 'Seven Beats Every Drummer Should Know',
		tags: 'drums, beats, basics',
	});
	Videos.insert({
		ytId: '2d7PDJqfia0',
		title: 'How To Build Hand Speed: Tony Royster Jr',
		tags: 'drums, technique, speed',
	});
	Videos.insert({
		ytId: '8T-85IbmuxE',
		title: 'Applying Rudiments to the Whole Drum Set',
		tags: 'drums, technique',
	});
}
