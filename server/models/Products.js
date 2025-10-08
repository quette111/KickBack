import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, 'Product title is required'],
            trim: true,
            minlength: [2, 'Title must be at least 2 characters long'],
        },
        brand: {
            type: String,
            trim: true,
            default: 'Unknown',
        },
        price: {
            type: Number,
            required: [true, 'Product price is required'],
            min: [0, 'Price must be a positive number'],
        },
        category: {
            type: String,
            required: [true, 'Category is required'],
            enum: {
                values: ['mens', 'womens', 'kids', 'jewelry'],
                message: '{VALUE} is not a valid category',
            },
        },
        description: {
            type: String,
            trim: true,
            default: '',
        },
        images: [
            {
                type: String,
                validate: {
                    validator: function (v) {
                        return /^(\/.*\.(png|jpe?g|gif|webp)|https?:\/\/.*\.(png|jpe?g|gif|webp))$/i.test(
                            v
                        );
                    },
                    message: (props) => `${props.value} is not a valid image URL`,
                },
                required: [true, 'At least one image is required'],
            },
        ],
        stock: {
            type: Number,
            required: true,
            min: [0, 'Stock cannot be negative'],
            default: 0,
        },
    },
    {
        timestamps: true, 
    }
);

const Product = mongoose.model('Product', productSchema);

export default Product;
