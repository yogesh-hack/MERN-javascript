function apikey(req,res,next){
    const api_key = '1234567';
   
   console.log(req.query)
   if(req.query.api_key && (req.query.api_key === api_key)){
    next()
   }else{
    res.json({Warning_message : 'Not allowed'})
   }
}

module.exports = apikey