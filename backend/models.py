
from typing import Optional
from sqlalchemy import Column, Integer, String, Float, ForeignKey
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class Product(Base):
    __tablename__ = "products"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(50), nullable=False)
    price = Column(Float)
    quantity = Column(Integer)
    origin_place = Column(String(50))    
    


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

    
    