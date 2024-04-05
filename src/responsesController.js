var responsesModel = require('./responsesModel')

exports.createUserControllerFn = (req, res, next) => {

    let user = new responsesModel({
        name: req.body.name,
        email: req.body.email,
        subject: req.body.subject,
        message: req.body.message
    })
    user.save()
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error =>{
        res.json({
            error
        })
    })
}
//  exports.createUserControllerFn = async (req, res) =>
// {
//     try
//     {
//         const body =  req.body;
//         const responsesModelData = new responsesModel()
//         responsesModelData.name = body.name
//         responsesModelData.email= body.email
//         responsesModelData.subject = body.subject
//         responsesModelData.message = bpdy.message
//         await responsesModelData.save()

//         res.status(200).send({
//             "status": true, "message": "Thank  you for your message! I'll reach out you as soon as possible"
//         });
//     }
//     catch(err)
//     {
//         res.status(400).send(err)
//     }
// }