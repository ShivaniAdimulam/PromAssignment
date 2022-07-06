const axios=require('axios')

const getrepo=async function(req,res){
    try{
    const{since,language}=req.query;
    let filter={}
    if(since){ 
        filter["since"]=since
    }

    if(language){
        filter["language"]=language
    }

    const data=await axios.get("https://private-d1997-githubtrendingapi.apiary-mock.com/repositories",{filter})

    return res.status(200).send({Data:data})

    }catch(err){
        console.log(err.message)
    }

}