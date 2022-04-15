const models = require("../models");

exports.addMember = (req, res, next) => {
  let name = req.body.name;

  models.Crew.findOne({
    attributes: ["name"],
    where: { name: name },
  })
    .then(function(memberExist){
        if(!memberExist){
            let newMember = models.Crew.create({
                name: name,
            })
            .then(function(newMember){
                return res.status(201).json({
                    memberId: newMember.id,
                });
            })
            .catch(function(err){
                return res.status(400).json({ error : err })
            });
        } else {
            return res.status(409).json({ error : "Cet Argonaute est déjà présent dans notre équipage !"})
        }
    })
    .catch(function(err){
        return res.status(500).json({ error : err })
    });
};
