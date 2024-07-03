const {StatusCodes} = require('http-status-codes')


const settings = async (req,res)=>{

    try{

       const response = {
            region : "EUROPE - DE",
            punkbaster : "ON",
            fairfight : "ON",
            password : "OFF",
            preset : "NORMAL"

        }

        return res.status(StatusCodes.OK).json({
            success: true,
            data: response,
            message: "successfully completed the request",
          });
    }
    catch(error)
    {
        console.log(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
          success: false,
          data: "something went wrong while fetching setting details",
          message: error.message,
        });
    }

}


const advanced = async (req,res)=>{

    try{

       const response = {
            minimap : "EUROPE - DE",
            sqaudLeader : "ON",
            vehicles : "ON",
            teamBalance : "OFF",
            minimap : "NORMAL",
            hud : "ON",
            pvehicleCam : "ON",
            regenearativeHealth : "ON",
            killCam : "ON",
            friendFire : "ON",
            spotting : "ON",
            enemyName : "ON",

        }

        return res.status(StatusCodes.OK).json({
            success: true,
            data: response,
            message: "successfully completed the request",
          });
    }
    catch(error)
    {
        console.log(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
          success: false,
          data: "something went wrong while fetching advanced details",
          message: error.message,
        });
    }

}


const rules = async (req,res)=>{
    try{
        const response = {
            tickets : '400',
            vehicleDelay : '25',
            bullet : '100',
            kickAfterteam : '5',
            playerHealth : '100',
            playerRespawn : '100',
            kickAfteridle : '300',
            banAfterkick : '3'

        }

        return res.status(StatusCodes.OK).json({
            success : true,
            data : response,
            message : 'successfully completed the request'
        })
    }
    catch(error){

        console.log(error)

        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success : false,
            data : '',
            message : 'something went wrong while fetching the rules details'
        })
    }
}



const cards = (req,res) =>{
    try{

        const response = [
            {desc : 'DAWNBREAKER',id:0,header:'CONQUEST LARGE'},{desc :'PROPAGANDA' ,id :1,header:'CONQUEST LARGE'},{desc : 'OPERATION LOCKER',id: 2,header:'CONQUEST LARGE'},{desc :'LANCANG DAM' ,id:3,header:'CONQUEST LARGE'},
           { desc : 'SIEGE OF SHANGHAI',id:4,header:'CONQUEST LARGE'},{desc :'GOLMUD RAILWAY',id:5,header:'CONQUEST LARGE'},{desc : 'PROPAGANDA',id:6,header:'CONQUEST LARGE'},{desc : 'SIEGE OF SHANGHAI',id:7,header:'CONQUEST LARGE'},
            {desc:'DAWNBREAKER',id:8,header:'CONQUEST LARGE'},{desc:'PROPAGANDA',id:9,header:'CONQUEST LARGE'},{desc:'OPERATION LOCKER',id:10,header:'CONQUEST LARGE'},{desc:'LANCANG DAM',id:11,header:'CONQUEST LARGE'},{desc:'SEIGE OF SHANGHAI',id:12,header:'CONQUEST LARGE'},{desc:'GOLMUD RAILWAY',id:13,header:'CONQUEST LARGE'},{desc:'PROPAGANDA',id:14,header:'CONQUEST LARGE'},{desc:'SEIGE OF SHANGHAI',id:15,header:'CONQUEST LARGE'}
        ]

        return res.status(StatusCodes.OK).json({
            success : true,
            data : response,
            message : 'successfully completed the request'
        })

    }
    catch(error){
        return res.status(StatusCodes.OK).json({
            success : false,
            data : '',
            message : 'something went wrong while fetching the cards details'
        })
    }
}

module.exports = {
    settings,
    advanced,
    rules,
    cards

}