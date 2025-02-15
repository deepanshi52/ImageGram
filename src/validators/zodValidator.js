export const Validate = (Schema) => {
    return async(req,res, next) => {
        try {
            console.log(req.body);
           Schema.parse(req.body);
           next(); 
        } catch (error) {
            return res.status(400).json({
                success: false,
                message: "Validation error",
                error: error.errors
            })
            
        }
    }
}