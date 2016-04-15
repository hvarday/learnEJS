var express = require('express');
var router = express.Router();

var sampleOBJ = {   "name":"HV", "age":20, "school":"SCOPE", "year":2, "courses":["CSE","MAT","FRE","MEE"] };
var recordOBJ = {  "info":[
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
                "lat": "-43.9509",
                "lng": "-34.4618"
            }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
        }
    },
    {
        "id": 3,
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
        "address": {
            "street": "Douglas Extension",
            "suite": "Suite 847",
            "city": "McKenziehaven",
            "zipcode": "59590-4157",
            "geo": {
                "lat": "-68.6102",
                "lng": "-47.0653"
            }
        },
        "phone": "1-463-123-4447",
        "website": "ramiro.info",
        "company": {
            "name": "Romaguera-Jacobson",
            "catchPhrase": "Face to face bifurcated interface",
            "bs": "e-enable strategic applications"
        }
    }
] };

var projectOBJ =    {   "info": [ {
    "_id": {
        "$oid": "52b213b38594d8a2be17c780"
    }
    ,
    "approvalfy":1999,
    "board_approval_month":"November",
    "boardapprovaldate":"2013-11-12T00:00:00Z",
    "borrower":"FEDERAL DEMOCRATIC REPUBLIC OF ETHIOPIA",
    "countrycode":"ET",
    "countryshortname":"Ethiopia",
    "docty":"Project Information Document,Indigenous Peoples Plan,Project Information Document",
    "idacommamt":130000000,
    "lendprojectcost":550000000,
    "majorsector_percent":[ {
        "Name": "Education", "Percent": 46
    }
    ,
    {
        "Name": "Education", "Percent": 26
    }
    ,
    {
        "Name": "Public Administration, Law, and Justice", "Percent": 16
    }
    ,
    {
        "Name": "Education", "Percent": 12
    }
    ],
    "project_abstract": {
        "cdata": "The development objective of the Second Phase of General Education Quality Improvement Project for Ethiopia is to improve learning conditions in primary and secondary schools and strengthen institutions at different levels of educational administration. The project has six components. The first component is curriculum, textbooks, assessment, examinations, and inspection. This component will support improvement of learning conditions in grades KG-12 by providing increased access to teaching and learning materials and through improvements to the curriculum by assessing the strengths and weaknesses of the current curriculum. This component has following four sub-components: (i) curriculum reform and implementation; (ii) teaching and learning materials; (iii) assessment and examinations; and (iv) inspection. The second component is teacher development program (TDP). This component will support improvements in learning conditions in both primary and secondary schools by advancing the quality of teaching in general education through: (a) enhancing the training of pre-service teachers in teacher education institutions; and (b) improving the quality of in-service teacher training. This component has following three sub-components: (i) pre-service teacher training; (ii) in-service teacher training; and (iii) licensing and relicensing of teachers and school leaders. The third component is school improvement plan. This component will support the strengthening of school planning in order to improve learning outcomes, and to partly fund the school improvement plans through school grants. It has following two sub-components: (i) school improvement plan; and (ii) school grants. The fourth component is management and capacity building, including education management information systems (EMIS). This component will support management and capacity building aspect of the project. This component has following three sub-components: (i) capacity building for education planning and management; (ii) capacity building for school planning and management; and (iii) EMIS. The fifth component is improving the quality of learning and teaching in secondary schools and universities through the use of information and communications technology (ICT). It has following five sub-components: (i) national policy and institution for ICT in general education; (ii) national ICT infrastructure improvement plan for general education; (iii) develop an integrated monitoring, evaluation, and learning system specifically for the ICT component; (iv) teacher professional development in the use of ICT; and (v) provision of limited number of e-Braille display readers with the possibility to scale up to all secondary education schools based on the successful implementation and usage of the readers. The sixth component is program coordination, monitoring and evaluation, and communication. It will support institutional strengthening by developing capacities in all aspects of program coordination, monitoring and evaluation; a new sub-component on communications will support information sharing for better management and accountability. It has following three sub-components: (i) program coordination; (ii) monitoring and evaluation (M and E); and (iii) communication."
    }
    ,
    "project_name":"Ethiopia General Education Quality Improvement Project II",
    "projectdocs":[ {
        "DocTypeDesc": "Project Information Document (PID), Vol.", "DocType": "PID", "EntityID": "090224b081e545fb_1_0", "DocURL": "http://www-wds.worldbank.org/servlet/WDSServlet?pcont=details&eid=090224b081e545fb_1_0", "DocDate": "28-AUG-2013"
    }
    ,
    {
        "DocTypeDesc": "Indigenous Peoples Plan (IP), Vol.1 of 1", "DocType": "IP", "EntityID": "000442464_20130920111729", "DocURL": "http://www-wds.worldbank.org/servlet/WDSServlet?pcont=details&eid=000442464_20130920111729", "DocDate": "01-JUL-2013"
    }
    ,
    {
        "DocTypeDesc": "Project Information Document (PID), Vol.", "DocType": "PID", "EntityID": "090224b0817b19e2_1_0", "DocURL": "http://www-wds.worldbank.org/servlet/WDSServlet?pcont=details&eid=090224b0817b19e2_1_0", "DocDate": "22-NOV-2012"
    }
    ],
    "url":"http://www.worldbank.org/projects/P129828/ethiopia-general-education-quality-improvement-project-ii?lang=en"
}

,
{
    "_id": {
        "$oid": "52b213b38594d8a2be17c781"
    }
    ,
    "approvalfy":2015,
    "board_approval_month":"November",
    "boardapprovaldate":"2013-11-04T00:00:00Z",
    "borrower":"GOVERNMENT OF TUNISIA",
    "countrycode":"TN",
    "countryshortname":"Tunisia",
    "docty":"Project Information Document,Integrated Safeguards Data Sheet,Integrated Safeguards Data Sheet,Project Information Document,Integrated Safeguards Data Sheet,Project Information Document",
    "idacommamt":0,
    "lendprojectcost":5700000,
    "majorsector_percent":[ {
        "Name": "Public Administration, Law, and Justice", "Percent": 70
    }
    ,
    {
        "Name": "Public Administration, Law, and Justice", "Percent": 30
    }
    ],
    "project_name":"TN: DTF Social Protection Reforms Support",
    "projectdocs":[ {
        "DocTypeDesc": "Project Information Document (PID), Vol.1 of 1", "DocType": "PID", "EntityID": "000333037_20131024115616", "DocURL": "http://www-wds.worldbank.org/servlet/WDSServlet?pcont=details&eid=000333037_20131024115616", "DocDate": "29-MAR-2013"
    }
    ,
    {
        "DocTypeDesc": "Integrated Safeguards Data Sheet (ISDS), Vol.1 of 1", "DocType": "ISDS", "EntityID": "000356161_20131024151611", "DocURL": "http://www-wds.worldbank.org/servlet/WDSServlet?pcont=details&eid=000356161_20131024151611", "DocDate": "29-MAR-2013"
    }
    ,
    {
        "DocTypeDesc": "Integrated Safeguards Data Sheet (ISDS), Vol.1 of 1", "DocType": "ISDS", "EntityID": "000442464_20131031112136", "DocURL": "http://www-wds.worldbank.org/servlet/WDSServlet?pcont=details&eid=000442464_20131031112136", "DocDate": "29-MAR-2013"
    }
    ,
    {
        "DocTypeDesc": "Project Information Document (PID), Vol.1 of 1", "DocType": "PID", "EntityID": "000333037_20131031105716", "DocURL": "http://www-wds.worldbank.org/servlet/WDSServlet?pcont=details&eid=000333037_20131031105716", "DocDate": "29-MAR-2013"
    }
    ,
    {
        "DocTypeDesc": "Integrated Safeguards Data Sheet (ISDS), Vol.1 of 1", "DocType": "ISDS", "EntityID": "000356161_20130305113209", "DocURL": "http://www-wds.worldbank.org/servlet/WDSServlet?pcont=details&eid=000356161_20130305113209", "DocDate": "16-JAN-2013"
    }
    ,
    {
        "DocTypeDesc": "Project Information Document (PID), Vol.1 of 1", "DocType": "PID", "EntityID": "000356161_20130305113716", "DocURL": "http://www-wds.worldbank.org/servlet/WDSServlet?pcont=details&eid=000356161_20130305113716", "DocDate": "16-JAN-2013"
    }
    ],
    "url":"http://www.worldbank.org/projects/P144674?lang=en"
}

]
}

var productOBJ = {  info    :   {
    {
        "id": 2,
        "name": "An ice sculpture",
        "price": 12.50,
        "tags": ["cold", "ice"],
        "dimensions": [
            "length": 7.0,
            "width": 12.0,
            "height": 9.5
        },
        "warehouseLocation": {
            "latitude": -78.75,
            "longitude": 20.4
        }
    },
    {
        "id": 3,
        "name": "A blue mouse",
        "price": 25.50,
        "dimensions": {
            "length": 3.1,
            "width": 1.0,
            "height": 1.0
        },
        "warehouseLocation": {
            "latitude": 54.4,
            "longitude": -32.7
        }
    }
]
};

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

/* GET sample page. */
router.get('/sample', function(req, res){
    //  second parameter is JavaScript Object, which is sent to the view.
    res.render('sample', sampleOBJ  );
})

/*  GET product page.    */
router.get('/product', function(req, res){
    res.render('product', productOBJ  );
})

/*  GET record page.    */
router.get('/record', function(req, res){
    res.render('record', recordOBJ  );
})

/*  GET projects page.    */
router.get('/projects', function(req, res){
    res.render('projects', projectOBJ  );
})

module.exports = router;
