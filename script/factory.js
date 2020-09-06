var Fac = [];

var SP = [
    "WOOF",
    "BARK",
    "LETS GO PUPPY",    
    "WHAT! TONY HAS FALLEN DOWN A WELL+AND HAS ONLY {*} MINUTES TO LIVE?",
    "HELLO BOY",
    "GOOD DOG",
    "WANNA TREAT FELLA?",
    "ARRGGH IVE FALLEN",
    "PUPPY GET HELP!",
    "LEAD THE WAY PUPPY",
    "HELP!"    
];

var NT=[
    "BLAH ",
    "TONY STILL NOT FOUND",
    "HERO PUPPY SAVES THE DAY",
    "BIG SCARY DOGS TERRORISE NEIGHBOURHOOD",
    "LATEST CASUALTY"
];

var C = {
    state:{game:4},
    col:{
        wt:8,
        d1:17,
        d2:21,
        d3:25,
        tr:29,
        mn:33,
        c1:38,
        c2:42,
        sw:46,
        aa:47 
    },   
    ass:{
        null:0,
        player:1,
        gdog:2,
        wdog:3,        
        man:4,
        stump:5,
        treat:6,
        toy:7,
        carl:8,
        carr:9,
        sqrl:10
    },
    src:{
        up:0,
        dn:3,
        lt:6,
        rt:9,
        spl:36,
        mup:37,
        mdn:40,
        mlt:43,
        mrt:46,
        t1:49,
        t2:50,
        hat:51,
        car:52,
        well:58,
        flat:59,
        tony:60,
        treat:63,
        toy:64
    },
    act:{
        up:0,
        dn:1,
        lt:2,
        rt:3,
        sq:4,
        dd:5
    }
}

//pallette
var PAL = [
"#2AF764",
"#29EB5F",
"#B1B3B5",

"#78421e",
"#532d0f",
"#532d0f",
"#532d0f",

"#29E0FF",
"#26D1F0",
"#22BBD6",
"#1C9AB0",

"#FF2BE2",
"#FF00DC",
"#FF49E6",
"#4800FF",
"#2AF764",
"#29EB5F",

"#C46D37",//d1
"#B26233",
"#9E572B",    
"#89451E",

"#626365",//d2
"#565759",
"#4C4D4F",
"#404042",

"#81544e",//d3
"#7e524c",
"#734b44",
"#64413b",

"#49B530",//tree
"#42A02B",
"#368724",
"#2D701E",

"#B658D8",//man1
"#A549C6",
"#9538B7",
"#f4ac6e",
"#e27d54",

"#F2DE00",//car1
"#E6D200",
"#D1BF00",
"#A69800",

"#FC4C75",//car2
"#F0486F",
"#D64165",
"#B03552",

'rgba(100, 100, 100, 0.3)',
"#000000",//47
"#161616",
"#333333",    
"#a0a0a0",
"#FFFFFF",
"#e20909",
"#db4444",
"#2aca50",
"#626365",//8
"#565759",
"#4C4D4F"

];
    
var assets ={    
    pupu:{
        idl:[3,[8,3,10,-1,10,-8,8,-4],2,[8,3,5,2,5,-5,8,-4],3,[14,-14,15,-16,15,-25,14,-23],0,[14,-23,12,-24,13,-26,15,-25],3,[10,-6,14,-14,14,-29,10,-21],2,[10,-6,-7,-10,-7,-25,10,-21],0,[10,-21,-7,-25,-3,-33,14,-29],3,[7,2,10,-5,10,-14,7,-7],1,[7,-8,-10,-12,-7,-18,10,-13.8],2,[7,1,-10,-3,-10,-12,7,-8],3,[4,11,7,5,7,-2,4,4],1,[4,4.3,-13,0.4,-10,-6,7,-1.8],2,[4,11,-13,7,-13,0,4,4],3,[-3,2,-2,-0.8,-2,-3.2,-3,-1.6],2,[-3,3,-6,2,-6,-2,-3,-1.3],0,[-3,-1.3,-5.8,-2,-4.3,-4,-2,-3.4]],
        bod:[3,[14,-14,15,-16,15,-25,14,-23],0,[14,-23,12,-24,13,-26,15,-25],3,[10,-6,14,-14,14,-29,10,-21],2,[10,-6,-7,-10,-7,-25,10,-21],0,[10,-21,-7,-25,-3,-33,14,-29],3,[3,7,10,-8,10,-17,3,-2],1,[3,-2,-14,-6,-7,-20,10,-16.8],2,[3,7,-14,3,-14,-6,3,-2],3,[-3,-3,-2,-5.8,-2,-8.2,-3,-6.6],2,[-3,-3,-6,-4,-6,-7,-3,-6.3],0,[-3,-6.3,-5.8,-7,-4.3,-9,-2,-8.4]],
        leg:[3,[8,3,10,-1,10,-8,8,-4],2,[8,3,5,2,5,-5,8,-4],3,[3,13,5,9,5,2,3,6],2,[3,13,0,12,0,5,3,6],3,[-11,10,-9,6,-9,-1,-11,3],2,[-11,10,-14,9,-14,2,-11,3]],
        run:[2,[10,1,15,-15,9,-15,6,0],3,[10,1,10,-9,12,-14,12,-8,15,-15,15,-10],3,[1,15,5,7,5,2,1,10],1,[1,15,-4,14,-4,10,-1,5,3,6,1,10],3,[-11,12,-6,3,-7,0,-11,8],1,[-11,12,-16,11,-16,7,-14,3,-8,2,-11,8]],
        fc:[]
    },
    pupd:{
        idl:[3,[10,0,13,-6,13,-12,10,-6],2,[10,0,7,-1,7,-7,10,-6],1,[10,-6,-10,-11,-7,-17,13,-12],3,[6,6,8,2,8,-5,6,-1],2,[6,6,3,5,3,-2,6,-1],3,[6,2,10,-6,10,-13,6,-6],1,[6,-6,-10,-10,-7,-17,10,-12.8],3,[2,10,6,2,6,-13,2,-5],2,[2,10,-15,6,-15,-9,2,-5],0,[2,-5,-15,-9,-11,-17,6,-13],3,[1,11,2,10,2,0,1,2],1,[1,11,-16,7,-16,-2,1,2],0,[1,2,-16,-2,-15,-4,2,0]],
        bod:[3,[6,0,13,-15,13,-24,6,-9],1,[6,-9,-10,-13,-3,-27,13,-23.8],3,[2,10,6,2,6,-13,2,-5],2,[2,10,-15,6,-15,-9,2,-5],0,[2,-5,-15,-9,-11,-17,6,-13],3,[1,11,2,10,2,0,1,2],1,[1,11,-16,7,-16,-2,1,2],0,[1,2,-16,-2,-15,-4,2,0],3,[5,-22,6,-24.8,6,-27.2,5,-25.6],2,[5,-22,2,-23,2,-26,5,-25.3],0,[5,-25.3,2.2,-26,3.7,-28,6,-27.4]],
        leg:[3,[11,-4,13,-8,13,-15,11,-11],2,[11,-4,8,-5,8,-12,11,-11],3,[6,6,8,2,8,-5,6,-1],2,[6,6,3,5,3,-2,6,-1]],
        run:[2,[11,-5,16,-22,12,-23,8,-6],3,[11,-5,11,-11,16,-22,16,-16],2,[-1,10,4,12,7,2,2,-2],3,[4,12,4,7,6,3,6,-2,8,-8,8,3]],
        fc:[0,[-5,5,-10,4,-10,0,-5,1],4,[-0.6,-1.2,-4.6,-2.1,-4.6,-4.9,-0.6,-4],4,[-9,-3,-13,-4,-13,-7,-9,-6],4,[1,9,-16,5,-16,4,1,8,3,5,3,5.9],6,[-3,10,-8,9,-8,6,-3,7]],
        fc2:[0,[-5,5,-10,4,-10,0,-5,1],7,[-0.6,-1,-4.6,-1.8,-4.6,-3.9,-0.6,-3],7,[-9,-3,-13,-4,-13,-6,-9,-5],0,[1,10,-16,6,-16,4,1,8,3,5,3,6.9],4,[-13,6.8,-9.1,7.9,-9,6.8,-13,5.8],4,[-6,8.3,-2.1,9.4,-2,8.3,-6,7.3]]
    },
    pupl:{
        idl:[3,[-5,6,-3,1,-3,-4,-5,-1],2,[-5,6,-9,5,-9,-3,-5,-2],2,[-19,-3,-21,-3.7,-21,-12,-19,-11.7],0,[-19,-11.6,-21,-12,-16,-22,-14,-21.7],3,[-10,-1,-5,-12,-5,-26.3,-10,-15.2],2,[-10,-1,-19,-3,-19,-17,-10,-15],0,[-10,-15,-19,-17,-13,-28,-5,-26],3,[0,2,5,-9,5,-16,0,-6],2,[0,2,-10,0,-10,-8,0,-5.6],1,[0,-5.6,-10,-8,-5,-18,5,-15.6],2,[9,9,-2,6.4,-2,-2,9,1],1,[9.2,2.1,0,-0.3,4.8,-9.1,13.7,-7],3,[9,9,13.7,-0.2,13.7,-7,9,1.9],3,[11,-1,12,-3,12,-6,11,-4],2,[11,-1.1,8,-2,8,-5,11,-4.1],0,[11,-4.2,8,-5,9,-7,12,-6.1]],
        bod:[2,[-19,-3,-21,-3.7,-21,-12,-19,-11.7],0,[-19,-11.6,-21,-12,-16,-22,-14,-21.7],3,[-10,-1,-5,-12,-5,-26.3,-10,-15.2],2,[-10,-1,-19,-3,-19,-17,-10,-15],0,[-10,-15,-19,-17,-13,-28,-5,-26],2,[13,3,-10,-2,-10,-11,13,-6],1,[13.2,-5.9,-10,-10.9,-5,-20,18,-15],3,[13,3,18,-8,18,-15,13,-5.1],3,[15,-8,16,-10,16,-13,15,-11],2,[15,-8.1,12,-9,12,-12,15,-11.1],0,[15,-11.2,12,-12,13,-14,16,-13.1]],
        leg:[3,[-5,6,-3,1,-3,-4,-5,-1],2,[-5,6,-9,5,-9,-3,-5,-2],3,[16,2,18,-3,18,-8,16,-5],2,[16,2,12,1,12,-7,16,-6],3,[13,10,15,5,15,-4,13,1],2,[13,10,9,9,9,0,13,1]],
        run:[3,[-5,5,-2,-1,-14,-6,-16,-2],2,[-5,5,-16,2,-16,-2,-9,0,-9,-3,-5,-2],3,[22,1,24,-3,24,-7,14,-9,14,-6,22,-4],2,[22,1,15,-1,15,-6,22,-4],3,[18,9,20,5,20,1,11,-1,8,2,18,4],2,[18,9,8,7,8,2,18,4]],
        fc:[1,[-16,-4,-21,-5,-21,-6,-16,-5]],
        fc2:[0,[-16,-4,-21,-5,-21,-6,-16,-5]]
    },
    pupr:{
        idl:[3,[-5,5,0,-4,-3,-5,-5,-2],1,[-5,-3,-15,-5,-11,-13,-1,-11],3,[1,7,3,2,3,-3,1,-2],2,[1,7,-3,6,-3,-3,1,-2],2,[-5,5.5,-15,3,-15,-5.4,-5,-3],2,[3,1.7,-7,-1,-7,-9.7,3,-7],1,[3,-6.7,-7,-8.9,-3,-17,7,-15],3,[11,4,16,-7,16,-21.3,11,-10.2],2,[11,4,2,2,2,-12,11,-10],0,[11,-10,2,-12,8,-23,16,-21],3,[13,4,18,-7,18,-15,13,-5],2,[13,4,11,4,11,-5,13,-4.7],1,[13,-4.6,11,-5,16,-15,18,-14.7],3,[-10,-7,-9,-9,-9,-12,-10,-10],2,[-10,-7.1,-13,-8,-13,-11,-10,-10.1],0,[-10,-10.2,-13,-11,-12,-13,-9,-12.1]],
        bod:[2,[5,0,-18,-5,-18,-14,5,-9],1,[5,-8.9,-18,-13.9,-13,-23,10,-18],3,[11,4,16,-7,16,-21.3,11,-10.2],2,[11,4,2,2,2,-12,11,-10],0,[11,-10,2,-12,8,-23,16,-21],3,[13,4,18,-7,18,-15,13,-5],2,[13,4,11,4,11,-5,13,-4.7],1,[13,-4.6,11,-5,16,-15,18,-14.7],3,[-13,-16,-12,-18,-12,-21,-13,-19],2,[-13,-16.1,-16,-17,-16,-20,-13,-19.1],0,[-13,-19.2,-16,-20,-15,-22,-12,-21.1]],
        leg:[3,[-14,3,-12,-2,-12,-7,-14,-4],2,[-14,3,-18,2,-18,-6,-14,-5],3,[1,7,3,2,3,-3,1,-2],2,[1,7,-3,6,-3,-3,1,-2]],
        run:[0,[-20,-15,-18,-18,-12,-16,-13,-13],3,[-15,-10,-20,-11,-20,-15,-15,-14],1,[-24,-7,-22,-10,-13,-8,-11,-6,-14,-1,-14,-5],2,[-14,-1,-24,-3,-24,-7,-14,-5],3,[7,7,10,2,-1,-5,-1,2],2,[7,7,-3,5,-3,-3,1,-2,1,2,7,3]],
        fc:[0,[14.5,-4.0,16.5,-8,16.5,-11.4,14.4,-6.9],4,[14,-11,15,-14,15,-16.7,14,-14],4,[12,-7,13,-10,13,-12.7,12,-10],4,[13,2,18,-8,18,-9,13,1,8,0,8,1],6,[17,-4,15,0,15,-3,17,-7]],
        fc2:[0,[14.5,-4.0,16.5,-8,16.5,-11.4,14.4,-6.9],7,[14,-11,15,-14,15,-15.7,14,-13],7,[12,-7,13,-10,13,-11.7,12,-9],0,[13,3,18,-7.5,18,-9,13,1,8,0,8,2],4,[17,-5,16,-3,16,-4,17,-6],4,[15,-1,14,1,14,0,15,-2]]
    },
    man:{
        bod:[2,[11,-2,21,-25,21,-44,11,-21],1,[11,-2,-21,-9,-21,-28,11,-21],4,[11,-21,21,-44,21,-63,11,-40],3,[11,-21,-21,-28,-21,-47,11,-40],3,[11,-40,-21,-47,-9,-70,21,-63]],
        v:{
            ex:[2,[21,-11,23,-15,23,-28,21,-24],1,[21,-11,15,-12.5,15,-25.4,21,-24],0,[21,-24,15,-25,17,-29,23,-28]],
            fceu:[10,[11,-28,16,-39,16,-43,21,-55,21,-63,11,-40],9,[11,-28,-21,-35,-21,-47,11,-40],8,[11,-40,-21,-47,-9,-70,21,-63]],
            fced:[10,[11,-34,16,-45,16,-39,21,-50,21,-63,11,-40],9,[11,-34,-21,-41,-21,-47,11,-40],8,[11,-40,-21,-47,-9,-70,21,-63],
            4,[-10,-33,-15,-34,-15,-37,-10,-36],4,[5,-30,0,-31,0,-34,5,-33],0,[2,-25,-12,-28,-12,-30.1,-10,-30,-10,-29,0,-27,0,-28,2,-27.5]],
            leg:[2,[-8,4,-3,-6,-3,-24,-8,-14],1,[-8,4,-17,2,-17,-14,-8,-13],2,[12,8,17,-2,17,-20,12,-10],1,[12,8,3,6,3,-10,12,-9]],
            leg1:[2,[-11,9,-6,-1,-6,-19,-11,-9],1,[-11,9,-20,7,-20,-9,-11,-8],2,[15,2,20,-8,20,-26,15,-16],1,[15,2,6,0,6,-16,15,-15]],
            leg2:[2,[-7,-2,-2,-12,-2,-30,-7,-20],1,[-7,-2,-16,-4,-16,-20,-7,-19],2,[10,13,15,3,15,-15,10,-5],1,[10,13,1,11,1,-5,10,-4]]
            },
        h:{          
            ex:[2,[-3,-1,-1,-5,-1,-18,-3,-14],1,[-3,-1,-9,-2.5,-9,-15.4,-3,-14],0,[-3,-14,-9,-15,-7,-19,-1,-18]],  
            fcel:[10,[11,-27,21,-50,21,-63,11,-40],9,[11,-27,-3,-30,-3,-36,-21,-40,-21,-47,11,-40],8,[11,-40,-21,-47,-9,-70,21,-63]],
            fcer:[10,[11,-34,21,-56,21,-63,11,-40],9,[11,-34,-3,-37,-3,-30,-21,-34,-21,-47,11,-40],8,[11,-40,-21,-47,-9,-70,21,-63],
            4,[13,-33,15,-38,15,-41,13,-36],4,[17,-41,19,-46,19,-49,17,-43.8],0,[14,-29.8,19,-41.8,19,-42.8,14,-31.8]],
            leg:[2,[7,-1,12,-11,12,-29,7,-19],1,[7,-1,-2,-3,-2,-19,7,-18],2,[1,11,5,3,5,-11,1,-7],1,[1,11,-11,8,-11,-7,1,-5]],
            leg1:[2,[15,0,19,-8,19,-26,15,-16],1,[15,0,5,-2,5,-18,15,-17],2,[-8,9,-4,1,-4,-13,-8,-9],1,[-8,9,-20,6,-20,-9,-8,-7]],
            leg2:[2,[-4,-3,0,-11,0,-29,-4,-19],1,[-4,-3,-14,-5,-14,-21,-4,-20],2,[10,13,14,5,14,-9,10,-5],1,[10,13,-2,10,-2,-5,10,-3]]
            }
    },
    tree:
    {
        bod:[3,[7,8,13,-5,13,-51,7,-40],2,[7,8,-12,4,-12,-47,7,-43]],
        hd1:[3,[13,-16,26,-44,26,-77,13,-49],2,[13,-16,-24,-24,-24,-57,13,-49],0,[13,-49,-24,-57,-10,-85,26,-77]],
        hd2:[3,[21,-35,41,-80,41,-89,21,-45],2,[21,-35,-42,-49,-42,-59,21,-45],1,[21,-45,-42,-59,-22,-102,41,-89],3,[11,-59,21,-82,21,-93,11,-70],2,[11,-59,-21,-66,-21,-77,11,-70],0,[11,-70,-21,-77,-10,-100,21,-93]]
    },
    tile:{
        sol:[0,[-11,-15,21.4,-7.7,11.0,15.4,-21.4,7.9]],
        hol:[0,[-11,-15,-21.9,9,-11.3,13]],
        cor:[0,[-1.2,-12.6,-11,-14.6,-21.3,7.6,-1.2,11.7]]
    },
    flat:[0,[-11,-15,21.4,-7.7,11.0,15.4,-21.4,7.9]],
    hat:[2,[22,29,-42,15,-22,-30,42,-16],0,[11,15,21,-8,21,-27,11,-4],1,[11,-4,-21,-11,-9,-34,21,-27],2,[11,15,-21,8,-21,-11,11,-4]],
    cube:[2,[11,15,21,-8,21,-27,11,-4],0,[11,-4,-21,-11,-9,-34,21,-27],1,[11,15,-21,8,-21,-11,11,-4]],
    car:{
        bod:[2,[11,9,21,-14,21,-33,11,-10],2,[11,9,-54,-6,-54,-25,11,-10],1,[11,-10,-54,-25,-43,-47,21,-33],2,[-4,-13,6,-36,6,-55,-4,-32],2,[-4,-13,-36,-20,-36,-39,-4,-32],1,[-4,-32,-36,-39,-24,-62,6,-55]],
        win:[0,[1,12,3,7.2,1,6.7],0,[-31,5,-29,-0.3,-31,-0.8],1,[1,12,-12,9,-12,-3,1,0],1,[-31,5,-44,2,-44,-10,-31,-7],3,[-35,1,-40,0,-40,-5,-35,-4],3,[-3,8,-8,7,-8,2,-3,3],3,[-3,-17,5,-36,5,-50,-3,-31],3,[-6,-15,-34,-21.4,-34,-37,-6,-30.9]],
        ltf:[4,[13,-3,15,-8,15,-13,13,-8],4,[20,-20,18,-15,18,-20,20,-25]],
        ltr:[5,[13,-3,15,-8,15,-13,13,-8],5,[20,-20,18,-15,18,-20,20,-25]]
    },
    well:[2,[11,15,21,-8,21,-27,11,-4],1,[11,15,-21,8,-21,-11,11,-4],0,[11,-4,-21,-11,-9,-34,21,-27],2,[-1,12,-21,8,-21,0,-1,4],2,[11,5,-9,1,-9,-8,11,-4],2,[-10,1,-20.7,-1.3,-20.8,-11,-10,-8.7],2,[11,15,0.3,12.7,0.2,4,11,6],3,[11,15,17,1,17,-7,11,6],3,[15,-4,21,-18,21,-26,15,-13],3,[18,-1,21,-8,21,-16,18,-9],3,[11,5,14,-3,14,-11,11,-4],1,[-4.9,-16.7,-16.6,-18.8,-9,-34,2.9,-31.3],1,[-10,-9,-21,-11,-17,-18,-6,-16],1,[14.5,-12,-4,-16,4,-31,21,-27],1,[11,-4,-9,-8,-5,-15,14,-11]]
};


var FONT = {    
    'A': [
        [, 1],
        [1, , 1],
        [1, 1, 1],
        [1, , 1],
        [1, , 1]
    ],
    'B': [
        [1, 1],
        [1, , 1],
        [1, 1, 1],
        [1, , 1],
        [1, 1]
    ],
    'C': [
        [1, 1, 1],
        [1],
        [1],
        [1],
        [1, 1, 1]
    ],
    'D': [
        [1, 1],
        [1, , 1],
        [1, , 1],
        [1, , 1],
        [1, 1]
    ],
    'E': [
        [1, 1, 1],
        [1],
        [1, 1, 1],
        [1],
        [1, 1, 1]
    ],
    'F': [
        [1, 1, 1],
        [1],
        [1, 1],
        [1],
        [1]
    ],
    'G': [
        [, 1, 1],
        [1],
        [1, , 1, 1],
        [1, , , 1],
        [, 1, 1]
    ],
    'H': [
        [1, , 1],
        [1, , 1],
        [1, 1, 1],
        [1, , 1],
        [1, , 1]
    ],
    'I': [
        [1, 1, 1],
        [, 1],
        [, 1],
        [, 1],
        [1, 1, 1]
    ],
    'J': [
        [1, 1, 1],
        [, , 1],
        [, , 1],
        [1, , 1],
        [1, 1, 1]
    ],
    'K': [
        [1, , , 1],
        [1, , 1],
        [1, 1],
        [1, , 1],
        [1, , , 1]
    ],
    'L': [
        [1],
        [1],
        [1],
        [1],
        [1, 1, 1]
    ],
    'M': [
        [1, 1, 1, 1, 1],
        [1, , 1, , 1],
        [1, , 1, , 1],
        [1, , , , 1],
        [1, , , , 1]
    ],
    'N': [
        [1, , , 1],
        [1, 1, , 1],
        [1, , 1, 1],
        [1, , , 1],
        [1, , , 1]
    ],
    'O': [
        [1, 1, 1],
        [1, , 1],
        [1, , 1],
        [1, , 1],
        [1, 1, 1]
    ],
    'P': [
        [1, 1, 1],
        [1, , 1],
        [1, 1, 1],
        [1],
        [1]
    ],
    'Q': [
        [0, 1, 1],
        [1, , , 1],
        [1, , , 1],
        [1, , 1, 1],
        [1, 1, 1, 1]
    ],
    'R': [
        [1, 1],
        [1, , 1],
        [1, , 1],
        [1, 1],
        [1, , 1]
    ],
    'S': [
        [1, 1, 1],
        [1],
        [1, 1, 1],
        [, , 1],
        [1, 1, 1]
    ],
    'T': [
        [1, 1, 1],
        [, 1],
        [, 1],
        [, 1],
        [, 1]
    ],
    'U': [
        [1, , 1],
        [1, , 1],
        [1, , 1],
        [1, , 1],
        [1, 1, 1]
    ],
    'V': [
        [1, , , , 1],
        [1, , , , 1],
        [, 1, , 1],
        [, 1, , 1],
        [, , 1]
    ],
    'W': [
        [1, , , , 1],
        [1, , , , 1],
        [1, , , , 1],
        [1, , 1, , 1],
        [1, 1, 1, 1, 1]
    ],
    'X': [
        [1, , , , 1],
        [, 1, , 1],
        [, , 1],
        [, 1, , 1],
        [1, , , , 1]
    ],
    'Y': [
        [1, , 1],
        [1, , 1],
        [, 1],
        [, 1],
        [, 1]
    ],
    'Z': [
        [1, 1, 1],
        [, , 1],
        [, 1],
        [1],
        [1, 1, 1]
    ],
    '0': [
        [1, 1, 1],
        [1, , 1],
        [1, , 1],
        [1, , 1],
        [1, 1, 1]
    ],
    '1': [
        [, 1],
        [, 1],
        [, 1],
        [, 1],
        [, 1]
    ],
    '2': [
        [1,1,1],
        [0,0,1],
        [1,1,1],
        [1,0,0],
        [1,1,1]
    ],
    '3':[
        [1,1,1],
        [0,0,1],
        [1,1,1],
        [0,0,1],
        [1,1,1]
    ],
    '4':[
        [1,0,1],
        [1,0,1],
        [1,1,1],
        [0,0,1],
        [0,0,1]
    ],
    '5':[
        [1,1,1],
        [1,0,0],
        [1,1,1],
        [0,0,1],
        [1,1,1]
    ],
    '6':[
        [1,1,1],
        [1,0,0],
        [1,1,1],
        [1,0,1],
        [1,1,1]
    ],
    '7':[
        [1,1,1],
        [0,0,1],
        [0,0,1],
        [0,0,1],
        [0,0,1]
    ],
    '8':[
        [1,1,1],
        [1,0,1],
        [1,1,1],
        [1,0,1],
        [1,1,1]
    ],
    '9':[
        [1,1,1],
        [1,0,1],
        [1,1,1],
        [0,0,1],
        [1,1,1]
    ],
    ' ': [
        [, ,],
        [, ,],
        [, ,],
        [, ,],
        [, ,]
    ],
    '?': [
        [1,1,1],
        [1,0,1],
        [0,1,1],
        [0,1,0],
        [0,1,0]
    ],
    '!': [
        [0,1,1],
        [0,1,1],
        [0,1,0],
        [0,0,0],
        [0,1,0]
    ],
    '+':[]
};
