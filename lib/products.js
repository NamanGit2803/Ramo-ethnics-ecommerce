import saree1 from "@/public/assets/product-saree-1.jpg";
import saree2 from "@/public/assets/product-saree-2.jpg";
import kurti1 from "@/public/assets/product-kurti-1.jpg";
import kurti2 from "@/public/assets/product-kurti-2.jpg";
import lehenga1 from "@/public/assets/product-lehenga-1.jpg";
import lehenga2 from "@/public/assets/product-lehenga-2.jpg";
import suit1 from "@/public/assets/product-suit-1.jpg";
import coord1 from "@/public/assets/product-coord-1.jpg";

export const products = [
    {
        id: "maroon-banarasi-silk",
        name: "Maroon Banarasi Silk Saree",
        category: "Sarees",
        price: 4499,
        mrp: 6999,
        rating: 4.8,
        reviews: 142,
        fabric: "Pure Banarasi Silk",
        occasion: "Wedding",
        description:
            "A timeless deep maroon Banarasi silk saree with intricate gold zari work. Drapes effortlessly for an unforgettable festive look.",
        image: saree1,
        hoverImage: saree2,
        sizes: ["Free Size"],
        inStock: true,
        isTrending: true,
    },
    {
        id: "blush-pink-anarkali",
        name: "Blush Pink Anarkali Kurti",
        category: "Kurtis",
        price: 1899,
        mrp: 2799,
        rating: 4.6,
        reviews: 89,
        fabric: "Georgette",
        occasion: "Festive",
        description:
            "A soft blush pink anarkali with delicate gold thread embroidery. Flowy, graceful, and perfect for intimate celebrations.",
        image: kurti1,
        hoverImage: kurti2,
        sizes: ["XS", "S", "M", "L", "XL"],
        inStock: true,
        isNew: true,
    },
    {
        id: "crimson-bridal-lehenga",
        name: "Crimson Bridal Lehenga",
        category: "Lehengas",
        price: 18999,
        mrp: 28999,
        rating: 4.9,
        reviews: 64,
        fabric: "Raw Silk",
        occasion: "Wedding",
        description:
            "An heirloom crimson bridal lehenga with heavy gold zari and sequin work. Made to be remembered.",
        image: lehenga1,
        hoverImage: lehenga2,
        sizes: ["XS", "S", "M", "L", "XL"],
        inStock: true,
        isTrending: true,
    },
    {
        id: "beige-gold-suit",
        name: "Beige & Gold Embroidered Suit",
        category: "Suits",
        price: 3299,
        mrp: 4999,
        rating: 4.7,
        reviews: 112,
        fabric: "Chanderi Silk",
        occasion: "Festive",
        description:
            "Understated luxury in beige with delicate gold embroidery. Includes dupatta and palazzo.",
        image: suit1,
        hoverImage: kurti1,
        sizes: ["S", "M", "L", "XL"],
        inStock: true,
    },
    {
        id: "sage-green-saree",
        name: "Sage Green Silk Saree",
        category: "Sarees",
        price: 3799,
        mrp: 5499,
        rating: 4.5,
        reviews: 76,
        fabric: "Soft Silk",
        occasion: "Daily",
        description:
            "A serene sage green saree with a subtle gold border. Lightweight, elegant, and easy to drape.",
        image: saree2,
        hoverImage: saree1,
        sizes: ["Free Size"],
        inStock: true,
        isNew: true,
    },
    {
        id: "pink-coord-set",
        name: "Blush Pink Co-ord Set",
        category: "Co-ord Sets",
        price: 2499,
        mrp: 3499,
        rating: 4.6,
        reviews: 54,
        fabric: "Cotton Silk",
        occasion: "Daily",
        description:
            "A relaxed yet refined kurta and palazzo set in blush pink with floral motifs.",
        image: coord1,
        hoverImage: kurti1,
        sizes: ["XS", "S", "M", "L", "XL"],
        inStock: true,
        isTrending: true,
    },
    {
        id: "emerald-lehenga",
        name: "Emerald Festive Lehenga",
        category: "Lehengas",
        price: 14999,
        mrp: 22999,
        rating: 4.8,
        reviews: 38,
        fabric: "Velvet",
        occasion: "Festive",
        description:
            "Regal emerald green lehenga with antique gold work. A statement piece for festive evenings.",
        image: lehenga2,
        hoverImage: lehenga1,
        sizes: ["S", "M", "L", "XL"],
        inStock: true,
    },
    {
        id: "ivory-gold-kurti",
        name: "Ivory & Gold Kurti",
        category: "Kurtis",
        price: 1599,
        mrp: 2299,
        rating: 4.4,
        reviews: 91,
        fabric: "Cotton Silk",
        occasion: "Daily",
        description:
            "An ivory kurti with hand-embroidered gold neckline. Effortlessly elegant for everyday wear.",
        image: kurti2,
        hoverImage: kurti1,
        sizes: ["XS", "S", "M", "L", "XL"],
        inStock: false,
    },
];

export const categories = [
    { name: "Sarees", image: saree1 },
    { name: "Kurtis", image: kurti1 },
    { name: "Lehengas", image: lehenga1 },
    { name: "Suits", image: suit1 },
    { name: "Co-ord Sets", image: coord1 },
    { name: "Festive Wear", image: lehenga2 },
];

export const getProduct = (id) => products.find((p) => p.id === id);

export const discountPct = (p) =>
    Math.round(((p.mrp - p.price) / p.mrp) * 100);