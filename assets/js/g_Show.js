var slideshow = {
	photoList: ['assets/img/dog.jpg', 'assets/img/cat.jpg', 'assets/img/fish.jpg', 'assets/img/house.jpg'],
	currentPhotoIndex: 0,
	playInterval: undefined,
	nextPhoto: function(){
		if(this.currentPhotoIndex + 1 < this.photoList.length){
			this.currentPhotoIndex++;
			this.displayPhoto();
		}else{
			this.pause();
			console.log('End of Slideshow.');
		}
	},
	prevPhoto: function(){
		if(this.currentPhotoIndex > 0){
			this.currentPhotoIndex--;
			this.displayPhoto();
		}else{
			console.log('Beginning of Slideshow.');
		}
	},
	displayPhoto: function(){
		$('#slide_image').attr('src', this.getCurrentPhoto());
	},
	getCurrentPhoto: function(){
		return this.photoList[this.currentPhotoIndex];
	},
	play: function(){
		this.playInterval = setInterval(this.nextPhoto.bind(this), 2000);
	},
	pause: function() {
		clearInterval(this.playInterval); 		
		},
};
slideshow.displayPhoto();

$('#prev_photo').click(function(){
	slideshow.prevPhoto();
});

$('#next_photo').click(function(){
	slideshow.nextPhoto();
});

$('#play').click(function(){
	slideshow.play();
});

$('#pause').click(function(){
	slideshow.pause();
});