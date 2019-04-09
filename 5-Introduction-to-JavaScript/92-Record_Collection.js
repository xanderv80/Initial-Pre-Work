/*  This module really was first module that made me come to a full stop. I was stuck on this for about 2 days trying to figure out. I left my wrong code here so I can look back at it and see why I couldn't solve this without looking at the hints. This is precisly why I really want to go to a bootcamp or work with other people that know this better than me. There is still so much I need to learn. I really hope someone can give me a chance to prove myself to code*/

// Setup


function updateRecords(id, prop, value) {
  if (prop === "tracks" && value !== "") {
   if(collection[id][prop]) {
    collection[id][prop].push(value);
   }
   else {
    collection[id][prop]=[value];
   }
  } else if (value !== "") {
    collection[id][prop] = value;
  } else {
    delete collection[id][prop];
  }

  return collection;
}









/*
var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [ 
        "Let It Rock", 
        "You Give Love a Bad Name" 
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [ 
        "1999", 
        "Little Red Corvette" 
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {

  if (prop = "tracks"){

    if (collection[id]("tracks")){
      
      if (value = ""){
        delete collection[id].prop;
      } else {
      collection[id].tracks.push(value)
      }

  } else {
    collection[id][prop].value;
    

  }
  
  return collection;
};

// Alter values below to test your code
updateRecords(5439, "artist", "ABBA");


collection[id][prop] = value;


// Setup
var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [ 
        "Let It Rock", 
        "You Give Love a Bad Name" 
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [ 
        "1999", 
        "Little Red Corvette" 
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {

  if (value = ""){

    delete collection[id].value;

  } /* else if (prop != "tracks"){

  collection[id][prop] = value; 

} else if (collection[id].hasOwnProperty("tracks")) {

  collection[id].tracks.push(value);

}  else {

  collection[id].tracks = value;
}
  
  return collection;
}

// Alter values below to test your code
updateRecords(5439, "artist", "ABBA");


delete collection[id][prop];
collection[id][prop] = value;
*/