const controller = {
  index: async (req, res) => {
   
    let payload = req.body;
    let courses = req.body.courses;
  
    if(courses){
  
      let order = [
        "Finance",
        "Investment",
        "InvestmentManagement",
        "PortfolioTheories",
        "InvestmentStyle",
        "PortfolioConstruction",
      ];
    
      let orderedCourses = [];
    
      order.forEach((elem) => {
        let result = courses.filter((curse) => curse.desiredCourse == elem);
        if(result[0])  orderedCourses.push(result[0])
        
      });
    
      payload["courses"] = orderedCourses[0];
      console.log(payload);
    
      res.json(payload);
  
    }
  
    res.json()
  }
};

module.exports = controller;
