var mailapp = {
	name: "Geoffrey Gauchet",
	mailboxes: [
		{
			name: 'inbox',
			emails: [
				{
					from: "someone@example.com",
					subject: "Hello!",
					body: "Hey, just wanted to say hello!",
					starred: false,
					read: true
				},
				{
					from: "someone@google.com",
					subject: "Here's the file",
					starred: true,
					read: true,
					attachment: {
						filename: 'my_resume.pdf',
						size: 224056,
					},
					body: "You requested my resume, so I've attached it to this message. Thanks again!"
				},
				{
					from: "dennis@aol.com",
					subject: "Hey there",
					starred: false,
					read: false,
					body: "I totally forgot to ask if you still had my saw you borrowed"
				}
			]
		},
		{
			name: 'sent',
			emails: [
				{
					to: "joe@tacobell.com",
					subject: "Re: Verde Sauce",
					body: "This is my third time requesting this, but please bring back the green Verde Sauce."
				},
				{
					to: "susan@comedycentral.com",
					subject: "Re: Comedy Special",
					body: "Thank you for the offer, but I'm very happy just performing in the back of a bar at 10:30pm on a Tuesday."
				}
			]
		},
		{
			name: 'spam',
			emails: [
				{
					from: "winners@thelottery.com",
					subject: "You just won $1M from a lotter you didn't buy a ticket for!",
					body: "Please send all of your personal info and bank account info!"
				},
				{
					from: "prince@anothercountry.com",
					subject: "Please send me money",
					body: "I'm not kidding. I'm actually a prince. send me moneyyyy"
				}
			]
		}
	],
	calendar: [
		{
			title: "Mom's Birthday",
			date: Date('May 14')
		},
		{
			title: "Independence Day",
			date: Date('July 4')
		},
		{
			title: "Take cat to vet",
			date: Date('August 14th 15:30:00')
		}
	]
};