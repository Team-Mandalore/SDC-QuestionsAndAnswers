const { Router } = require ('express');
const controller = require ('./controller.js');

const router = Router();
router.get ('/:product_id', controller.getQA);
router.get ('/:question_id/answers', controller.getSpecificAnswers);
router.post ('/:product_id', controller.askQuestion);



module.exports = router;