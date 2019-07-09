var slideshow = {
	photoList: ['Zelda.jpg', 'Link.jpg', 'Gannon.jpg', 'Mimpha.jpg'],
	currentPhotoIndex: 0,
	nextPhoto: function(){
		if(this.currentPhotoIndex + 1< this.photoList.length){ //not changing the value of photo index, just chedking to see if value is less than the length
			this.currentPhotoIndex ++;
			this.displayPhoto();
		}else{
			console.log('End of slideshow.');
		}
	},
	prevPhoto: function(){
		if(this.currentPhotoIndex > 0){
			this.currentPhotoIndex --;
			this.displayPhoto();
		}else{
			console.log('Beginning of slideshow.');
		}
	},
	displayPhoto: function(){
		console.log(this.getCurrentPhoto());
	},	
	getCurrentPhoto: function(){
		return this.photoList[this.currentPhotoIndex];
	}
}