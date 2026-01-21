from fastapi import HTTPException
from sqlalchemy.orm import Session
from models import Product
from schemas import *

def create_product(db: Session, product: ProductCreate):
    db_product = Product(**product.model_dump())
    db.add(db_product)
    db.commit()
    db.refresh(db_product)
    return db_product

def get_product_by_id(db: Session, product_id: int):
    return db.query(Product).filter(Product.id == product_id).first()

def get_products(db: Session, skip: int = 0, limit: int = 100):
    return db.query(Product).offset(skip).limit(limit).all()

def update_product(db: Session, product_id: int, product: ProductUpdate):
    db_product = db.query(Product).filter(Product.id == product_id).first()
    
    if not db_product:
        raise HTTPException(status_code=404, detail="Product not found")
    db_product.name = product.name or db_product.name
    db_product.price = product.price or db_product.price
    db_product.quantity = product.quantity or db_product.quantity
    db_product.origin_place = product.origin_place or db_product.origin_place
    db.add(db_product)
    db.commit()
    db.refresh(db_product)
    return db_product
