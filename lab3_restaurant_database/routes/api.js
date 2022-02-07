const router = require("express").Router()
const { json } = require("body-parser");
const { Post } = require("../model/schema");

router.post("/add", (req, res) => {
    const post = new Post(req.body);
    post.save((err) => {
        if (err) return res.status(400).json({ success: false, err });
        return res.status(200).json({ success: true })
    })
})

router.get("/", (req, res) => {
    Post.find().exec((err, restaurants) => {
        if (err) return res.status(400).json({ success: false, err });
        return res.status(200).json({ success: true, restaurants: restaurants })
    })
})

router.get("/cuisine/:cuisine", async (req, res) => {
    const input = req.params.cuisine
    const post = await Post.find({ cuisine: input });

    try {
        if (post.length != 0) {
            res.send(post);
        } else {
            res.send(JSON.stringify({ status: false, message: "No data found" }))
        }
    } catch (err) {
        res.status(500).send(err);
    }
})

router.get("/restaurants", async (req, res) => {
    if(Object.keys(req.query).length != 1){
        res.send(JSON.stringify({status:false, message: "Insufficient query parameter"}))
      }else{
       const sortBy = req.query.sortBy
        const post = await Post.find({}).select("_id cuisine name city restaurant_id").sort({restaurant_id:sortBy});
        
        try {
          if(post.length != 0){
            res.send(post);
          }else{
            res.send(JSON.stringify({status:false, message: "No data found"}))
          }
        } catch (err) {
          res.status(500).send(err);
        }
    }
})

router.get("/Delicatessen", async (req, res) => {
    const post = await Post.find({ cuisine: "Delicatessen" }).where("city").ne("Brooklyn").select("cuisine name city -_id").sort({name:ASC});

    try {
        if (post.length != 0) {
            res.send(post);
        } else {
            res.send(JSON.stringify({ status: false, message: "No data found" }))
        }
    } catch (err) {
        res.status(500).send(err);
    }
});



module.exports = router;
