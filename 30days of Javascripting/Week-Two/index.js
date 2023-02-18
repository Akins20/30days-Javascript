// git remote add origin https://github.com/Akins20/30days-of-Javascripting.git
//question1: declaring and assigning of variable named challenge
challenge = "30 Days Of JavaScript";
//question4: make the string characters to be capital letters
bigChallenge = challenge.toUpperCase();

//question5: make the string characters to be lowercase letters
smallChallenge = challenge.toLowerCase();

//question6: slice out first word of string using substr() or substring()
subLetrsChallenge1 = challenge.substr( 2, 6 );
//question7: slice out phrase "Days Of JavaScript" from the string
subLetrsChallenge2 = challenge.substr( 2 );
//question8: check string for the word "Script" using includes() method
wordCheckChallenge = challenge.includes( "Script" );
//question9: split the string into an array using split() method
arrChallenge1 = challenge.split();
//question10: split the string at space using split() method
arrChallenge2 = challenge.split( " " );
// question11:split string below at comma and change it to an array
itCompany = "Facebook, Google, Apple, IBM, Oracle, Amazon";
arritCompany = itCompany.split( " , " );

// question12:In string, replace JavaScript with  Python  using replace() method
replaceChallenge = challenge.replace( "JavaScript", "Python" );

// question13:find the charater at index 15 using charAT() method
charChallenge = challenge.charAt( 15 );

// question14:find the charater code of'J'  using charAt() method
charChallenge = challenge.charCodeAt( "J" );
// question15:find position of first occurence of 'a' in challenge string using indexOf() method
indxChallenge = challenge.indexOf( "a" );
// question16:find position of last occurence of 'a' in challenge string using lastindexOf() method
lastIndxChallenge = challenge.lastIndexOf( "a" );
// question17:find position of first occurence of 'because' in the string below using indexOf() method
english =
    "You cannot end a sentence with  because because because is  a conjunction";
indxEnglish = english.indexOf( "because" );
// question18:find position of last occurence of 'because' in the string above using lastIndexOf() method
lastIndxEnglish = english.lastIndexOf( "because" );
// question19:find position of first occurence of 'because' in the string above using search() method
searchEnglish = english.search( "because" );
// question20:use trim() method to remove white space at the beginning and end of the below string
whtspaceChallenge = "' 30 Days Of JavaScript ' ";
trimChallenge = whtspaceChallenge.trim();
// question21:use startsWith() method with the challenge string. Let it result in true.
startWordChallenge = challenge.startsWith( 30 );
// question22:use endsWith() method with the challenge string. Let it result in true.
endingWordChallenge = challenge.endsWith( "JavaScript" );
// question23:use match() method to find all a's in the challenge string.
mtchingTxtChallenge = challenge.match( "a" );
// question24:use concat() to merge the two strings below.
concatStr1 = "30 Days Of ";
concatStr2 = "JavaScript";
finalConcatStr = concatStr1.concat( concatStr2 );
// question25:use repeat() method to print challenge string 2 times.
repeatChallenge = challenge.repeat( 2 );