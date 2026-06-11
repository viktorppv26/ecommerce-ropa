interface ProductColorGenderProps {
    color: string;
    gender: string;
}

const ProductColorGender = ({ color, gender }: ProductColorGenderProps) => {
    return (
        <div className="flex items-center justify-between gap-3">
            <p className="px-2 py-1 text-xs text-white bg-black rounded-full w-fit">
                {color}
            </p>
            <p className="px-2 py-1 text-xs text-white bg-yellow-900 rounded-full w-fit">
                {gender}
            </p>
        </div>
    )
}

export default ProductColorGender