const Product= require('../Models/Product');

// adding the Product 
const  CreateProduct= async (req,res)=>{
    try {
        const newProduct= new Product(req.body);
        await newProduct.save()
        res.status(201).json(newProduct);
    } catch (error) {
        console.log('Error while creating the product')
        res.status(500).json({'message':error.message})
    }

}

// updating the product

const UpdateProduct=async(req,res)=>{
    try{
        const updateProduct= await Product.findByIdAndUpdate(req.params.id,req.body,{new:true})
        if(!updateProduct){
            res.status(404).json({'message': 'Product not found'})  
        }
        res.status(200).json(updateProduct)
    }catch(error){
        console.log('error while updating the product')
        res.status(500).json({'message':error.message})
    }
} 

// getting  all the product

const GetAllProduct = async (req, res) => {
    try {
      const allProduct = await Product.find();
  
      if (!allProduct || allProduct.length === 0) {
        return res.status(404).json({
          message: 'No products found',
        });
      }
  
      res.status(200).json(allProduct);
  
    } catch (error) {
      console.log('Error while getting all the products:', error.message);
      res.status(500).json({ message: error.message });
    }
  };

// getting product by Id

const GetProductById=async (req,res)=>{
    try{
        const ProductById= await Product.findById(req.params.id);
        if(!ProductById){
            res.status(404).json({
                'message':'product not found'
            })
        }
        res.status(200).json(ProductById)
    }catch(error){
        console.log('error  while getting product by id')        
        res.status(500).json({'message':error.message})

    }
}

// Deteting product by ID
const DeleteProduct=async(req,res)=>{
    try {
        const deletedProduct= await Product.findByIdAndDelete(req.params.id);
        if(!deletedProduct){
            res.status(404).json({
                'message':'product not found'
            });
        res.status(200).json({
            'message':'product deleted successfully'
        })
            }
        
    } catch (error) {
        console.log('error while deleting the product')
        res.status(500).json({
            'message': error.message
        })
        
    }
}

module.exports={
    CreateProduct,
    UpdateProduct,
    GetAllProduct,
    GetProductById,
    DeleteProduct
}