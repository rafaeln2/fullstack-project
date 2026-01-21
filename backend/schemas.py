from pydantic import BaseModel, Field

class ProductBase(BaseModel):    
    name: str = Field(..., max_length=50)
    price: float | None
    quantity: int | None # required but can be None.
    origin_place: str | None = None # optional
    
# POST
class ProductCreate(ProductBase):
    pass

# PATCH
class ProductUpdate(BaseModel):
    name: str | None = None
    price: float | None = None
    quantity: int | None = None 
    origin_place: str | None = None 
    
# GET
class ProductResponse(ProductBase):
    id: int
    
    class Config:
        orm_mode = True