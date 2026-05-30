import ShopContent from "@/components/shop/ShopContent";


export default function Shop({searchParams}) {
 

    return (
       <ShopContent categoty={searchParams.category} q={searchParams.q} />
    );
}

