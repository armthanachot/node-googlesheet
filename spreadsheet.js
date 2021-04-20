const { GoogleSpreadsheet } = require('google-spreadsheet');
const creds = require("./nodejs sheet-e0295224c160.json")
// const creds = require("./nodesheet2-aaea7d07ff03.json")

// Initialize the sheet - doc ID is the long id in the sheets URL
const doc = new GoogleSpreadsheet('1l9GFBBcikHDVo5ue_69MGrhIkVIk97HlME-Dc_ycFGQ');
// const doc = new GoogleSpreadsheet('1EypQEguWOuL5DH1Xd47bfKSCGDG9BdH0T7Ixa8RpJKk');

async function accessSpreadSheet(){
    await doc.useServiceAccountAuth({
        client_email: creds.client_email,
        private_key: creds.private_key,
      });
    const info = await doc.loadInfo()
    await doc.updateProperties({title:"nodejsSheetTest"})
    // console.log("title updated: ",doc.title);
    const sheet_first = doc.sheetsByTitle[doc.title]
    // console.log("sheet title: ",sheet_first.title);
    // console.log("sheet row count: ",sheet_first.rowCount); 
    // create sheet and set headers
    // await doc.addSheet({headerValues: ['name','email']})
    // add data to row
    await sheet_first.addRow({
        email:'Thanachot',
        phone:'0627422305'
    })
    // add data to many rows
    // await sheet_first.addRows([{
    //     fname:"Ammara",
    //     lname:"Sungram",
    // },{
    //     fname:"Patchara",
    //     lname:"Mangkorn"
    // },{
    //     fname:"Phattranit",
    //     lname:"Tesjaroen"
    // }])
    // // get row by index
    // const rows = await sheet_first.getRows()
    // console.log(rows[0]);
    // console.log(rows[0].fname);
    // console.log(rows[0].lname);
    // // update row
    // rows[0].fname = "Armthanachot"
    // rows[0].save()
    // // delete row 
    // rows[1].delete()

}

accessSpreadSheet()

// node spreadsheet.js