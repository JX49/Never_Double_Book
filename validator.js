var validate = ( function (startTime, endTime, roomName){
   //console.log(start + " - " + end) use commented code for testing
//thisInc is used to store a value for the given room's increment. Found will be true when the room is found
// the for loop will find the last and then the first occurence of the room's indicies. This is why it is critical the be grouped together. 
   var thisInc = -1;
   var found = false;
    var lengthMinusOne = 0;
	return function () {
   
for (var i = names.length - 1;i>=0; i--) {
         //console.log("here we go: " + room + ", names[i] = " + names[i] + ", index is: " + i )
         if(room == names[i] && found == false){
         var last = i;
	  thisInc = increments[i];
    console.log(thisInc)
          found = true;
         }
         if(room != names[i] && found == true){
          var first = i + 1;
         }
         if(room == names[i] && i == lengthMinusOne){
          var first = i;
          }
          if(room != names[i] && i == lengthMinusOne && found == false){
          console.log("all avalible rooms must be provided by the server")
          }
        }
   
// here we test if the room booking is valid
// logic is solid and will verify if a room booking has a valid time increment and if overlaps any previous bookings
//for the specific room
//TODO: add exceptions
   
   if((test(start, end,last,first,thisInc) == true)){
    
    
   alert("success, your booking was completed!");
	return true;
   
    
    
    
    
    
   }
   else{
    alert("that booking is invalid, please try again")
	return false;
   }
   
   function test(from, to,last,first,thisInc) {
   
	//console.log(last + " last - first " + first)
    if(first == -1){
	console.log("this should never happen");
     return true;
     
    }
    var myBookingFrom = toMins(from);
     var myBookingTo = toMins(to);
     var previousFromTime = 0;
     var previousToTime = 0;
	if(myBookingFrom % thisInc != 0 || myBookingTo % thisInc != 0)
	{
            alert("wrong increment!");
            return false;
	}
    for (var i = first; i <= last; i++) {
      previousFromTime = toMins(fromTimings[i]), previousToTime = toMins(toTimings[i]);
      //console.log(" previous booking in mins: " + previousFromTime + " - " + previousToTime)
      //console.log(" this booking in mins: " + myBookingFrom + " - " + myBookingTo)
      if ((myBookingFrom > previousFromTime && myBookingFrom < previousToTime) || (myBookingTo > previousFromTime && myBookingTo < previousToTime) ||(myBookingFrom <= previousFromTime && myBookingTo >= previousToTime)){
       alert("caught ya!");
        return false;
      }
    }
    //console.log("it truly works");
    return true;
  }
  
  function toMins(time) {
    time = time + '';
    var parts = time.split(':');
    return (+parts[0] * 60 + +parts[1]);
  }
  
  function testTime(from, to) {
  //  console.log(from + '-' + to + ': ' + test(from, to));
  }
} })();
