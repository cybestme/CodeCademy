/*jshint multistr:true */
var text = "nnn sllkf mmkjklds iep[pkkjal lkdjfkfl aoeprkf kdlsa afmlfdko ojklkffs\
jiejri ppkfsl fklfls jksajfikj ljfkopoe kkjfll  flwjijfal ksjairiejijf ljfkjkkkkwe\
cybest dkjfk lklkflsk jkafl alzkdfkklkfk lklafsasafk  dlkflk";

var myName = "cybest";

var hits = [ ];

for (var i=0; i<text.length; i++) {
    if ( text[i] === "c" ) {
        for (var j = i; j < myName.length + i; j++) {
            hits.push(text[j]);
        }
    }
};
