-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('ADMIN', 'USER');

-- CreateEnum
CREATE TYPE "TransactionType" AS ENUM ('income', 'outcome');

-- CreateEnum
CREATE TYPE "TransactionCategory" AS ENUM ('salary', 'cash', 'gifts_donations', 'holiday', 'savings', 'healthcare', 'entertainment', 'clothing', 'home_maintenance', 'groceries', 'dining_out', 'transport', 'utilities', 'rent_morgage', 'loan', 'dept', 'insurance', 'subscription', 'other');

-- CreateEnum
CREATE TYPE "PaymentFrequency" AS ENUM ('yearly', 'quarterly', 'montly', 'one_payment');

-- CreateEnum
CREATE TYPE "CommitmentType" AS ENUM ('loan_dept', 'lease', 'insurance', 'subscription', 'other');

-- CreateEnum
CREATE TYPE "Currency" AS ENUM ('EUR', 'USD', 'GBP');

-- CreateEnum
CREATE TYPE "CashAssetCategory" AS ENUM ('savings', 'checking', 'cash', 'emergency', 'vacation', 'other');

-- CreateEnum
CREATE TYPE "EquityCategory" AS ENUM ('tech', 'finance', 'energy', 'health', 'consumer', 'industrials', 'e_commerce', 'divident', 'other');

-- CreateEnum
CREATE TYPE "BondCategory" AS ENUM ('government', 'corporate', 'municipal', 'junk', 'other');

-- CreateEnum
CREATE TYPE "RealEstateType" AS ENUM ('residential', 'land', 'commercial', 'industrial', 'other');

-- CreateEnum
CREATE TYPE "MetalType" AS ENUM ('gold', 'silver', 'platinum', 'palladium', 'other');

-- CreateEnum
CREATE TYPE "MetalState" AS ENUM ('metal', 'paper');

-- CreateEnum
CREATE TYPE "SDCType" AS ENUM ('equities', 'bond_coupon', 'crypto');

-- CreateEnum
CREATE TYPE "UtilyType" AS ENUM ('water', 'electricity', 'gas', 'internet', 'television', 'phone', 'wasteDisposal', 'homeSecurity', 'maintenance', 'other');

-- CreateEnum
CREATE TYPE "WhoPaid" AS ENUM ('owner', 'tenant');

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "auth0Id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_auth0Id_key" ON "users"("auth0Id");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
