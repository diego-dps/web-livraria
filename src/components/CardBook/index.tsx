import React from 'react';

interface ProductProps {
  imageSrc?: string;
  href?: string;
  name?: string;
  description?: string;
}

const CardBook: React.FC<ProductProps> = ({ imageSrc, href, name, description }) => {
  return (
    <div className="relative group">
      <div className="w-full overflow-hidden bg-gray-200 rounded-md aspect-h-1 aspect-w-1 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <img
          src={imageSrc}
          alt={name}
          className="object-cover object-center w-full h-full lg:h-full lg:w-full"
        />
      </div>
      <div className="flex justify-between mt-4">
        <div>
          <h3 className="text-sm text-gray-700">
            <a href={href}>
              <span aria-hidden="true" className="absolute inset-0" />
              {name}
            </a>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default CardBook;
