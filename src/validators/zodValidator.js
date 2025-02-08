export const Validate = (Schema) => {
    return async(res, req, next) => {
        try {
            console.log(req.body);
           schema.parse(req.body);
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