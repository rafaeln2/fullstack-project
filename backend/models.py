
from sqlalchemy import Integer, String, Float, ForeignKey
from sqlalchemy.orm import mapped_column, Mapped, declarative_base
# from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class Product(Base):
    __tablename__ = "products"
    id: Mapped[int] = mapped_column(primary_key=True, index=True, unique=True)
    name: Mapped[str] = mapped_column(String(50), nullable=False)  
    price: Mapped[Float] = mapped_column(Float, nullable=True)
    quantity: Mapped[int] = mapped_column(Integer, nullable=True)
    origin_place: Mapped[str] = mapped_column(String(50), nullable=True)  
    
    def __repr__(self):
        return f"<Product(id={self.id}, name={self.name}, price={self.price}, quantity={self.quantity}, origin_place={self.origin_place})>"


# from pydantic import BaseModel, Field, field_validator
# class Product(BaseModel):
#     id: int = Field(...)
#     name: str = Field(..., max_length=50)
#     price: float | None
#     quantity: int | None # required but can be None.
#     origin_place: str | None = None # optional
    
#     @field_validator("price")
#     @classmethod
#     # Equivalent to using Field(..., gt=0)
#     def validate_price(cls, v: Optional[float]) -> Optional[float]:
#         if v is None:
#             return v
#         if v < 0:
#             raise ValueError("Price must be greater than 0")
#         return v

    
    