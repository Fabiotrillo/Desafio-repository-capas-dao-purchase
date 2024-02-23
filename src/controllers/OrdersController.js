class OrderController {
    static getOrders = async (req, res) => {
        try { 
        
            res.status(200).send({
              status: "success",
              payload: "getOrders",
            });
          } catch (error) {
            res.status(500).send({ status:"Error", message:error.message });
          }
    }
  
    static getOrderById = async (req, res) => {
        try { 
        
            res.status(200).send({
              status: "success",
              payload: "getOrderById",
            });
          } catch (error) {
            res.status(500).send({ status:"Error", message:error.message });
          }
    };
  
    static createOrder = async (req, res) => {
        try { 
        
            res.status(200).send({
              status: "success",
              payload: "createOrder",
            });
          } catch (error) {
            res.status(500).send({ status:"Error", message:error.message });
          }
    }
  
    static resolveOrder = async (req, res) => {
        try { 
        
            res.status(200).send({
              status: "success",
              payload: "resolveOrder",
            });
          } catch (error) {
            res.status(500).send({ status:"Error", message:error.message });
          }
    }
  
  }

  export default OrderController;