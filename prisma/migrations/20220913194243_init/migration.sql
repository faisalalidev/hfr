-- CreateTable
CREATE TABLE "Assets" (
    "id" SERIAL NOT NULL,
    "fund_id" INTEGER NOT NULL,
    "fund" TEXT NOT NULL,
    "fund_date" TIMESTAMP(3) NOT NULL,
    "asset" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Assets_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Fund" (
    "id" SERIAL NOT NULL,
    "fund_id" INTEGER NOT NULL,
    "fund" TEXT NOT NULL,
    "firm" TEXT NOT NULL,
    "principle" TEXT NOT NULL,
    "address1" TEXT NOT NULL,
    "address2" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "zip" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "facsimile" TEXT NOT NULL,
    "contact1" TEXT NOT NULL,
    "contact2" TEXT NOT NULL,
    "structure" TEXT NOT NULL,
    "minimum_investment" DOUBLE PRECISION NOT NULL,
    "additional_investment" DOUBLE PRECISION NOT NULL,
    "inception_date" TIMESTAMP(3) NOT NULL,
    "reporting" TEXT NOT NULL,
    "reporting_style" TEXT NOT NULL,
    "main_strategy" TEXT NOT NULL,
    "sub_strategy" TEXT NOT NULL,
    "strategy_description" TEXT NOT NULL,
    "leverage" TEXT NOT NULL,
    "fund_assets" DOUBLE PRECISION NOT NULL,
    "firm_assets" DOUBLE PRECISION NOT NULL,
    "returns_denomination" TEXT NOT NULL,
    "management_fee" DOUBLE PRECISION NOT NULL,
    "incentive_fee" DOUBLE PRECISION NOT NULL,
    "high_watermark" TEXT NOT NULL,
    "hurdle_rate" TEXT NOT NULL,
    "open_for_investment" TEXT NOT NULL,
    "subscriptions" TEXT NOT NULL,
    "redemptions" TEXT NOT NULL,
    "advance_notice" DOUBLE PRECISION NOT NULL,
    "lockup" TEXT NOT NULL,
    "administrator" TEXT NOT NULL,
    "auditor" TEXT NOT NULL,
    "audit_date" TIMESTAMP(3) NOT NULL,
    "individual_account_min" DOUBLE PRECISION NOT NULL,
    "fund_assets_as_of" TIMESTAMP(3) NOT NULL,
    "Firm_assets_as_of" TIMESTAMP(3) NOT NULL,
    "fund_assets_denomin" TEXT NOT NULL,
    "firm_assets_denomin" TEXT NOT NULL,
    "sales_fee" DOUBLE PRECISION NOT NULL,
    "other_fees" DOUBLE PRECISION NOT NULL,
    "prime_broker" TEXT NOT NULL,
    "banking_agent_onshore" TEXT NOT NULL,
    "legal_adviser_onshore" TEXT NOT NULL,
    "annual_perform_audit" TEXT NOT NULL,
    "open_to_investor_type" TEXT NOT NULL,
    "firm_id" INTEGER NOT NULL,
    "min_investment_denomin" TEXT NOT NULL,
    "offshore_vehicle" TEXT NOT NULL,
    "custodian" TEXT NOT NULL,
    "in_hfri" TEXT NOT NULL,
    "in_hfrx" TEXT NOT NULL,
    "regional_investment_focus" TEXT NOT NULL,
    "in_emerging_markets" TEXT NOT NULL,
    "date_added_to_db" TIMESTAMP(3) NOT NULL,
    "domicile" TEXT NOT NULL,
    "is_diversity_firm" TEXT NOT NULL,
    "fund_registration_code" TEXT NOT NULL,
    "firm_sec_registered" TEXT NOT NULL,
    "firm_sec_number" TEXT NOT NULL,
    "firm_iard_crd_number" TEXT NOT NULL,
    "strategy_code" DOUBLE PRECISION NOT NULL,
    "sub_strategy_code" DOUBLE PRECISION NOT NULL,
    "region_inv_focus_code" DOUBLE PRECISION NOT NULL,
    "fund_status" TEXT NOT NULL,
    "ucitsiii" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Fund_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HFRIConstituents" (
    "id" SERIAL NOT NULL,
    "index_id" INTEGER NOT NULL,
    "index_name" TEXT NOT NULL,
    "fund_id" INTEGER NOT NULL,
    "fund" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "HFRIConstituents_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HFRXConstituents" (
    "id" SERIAL NOT NULL,
    "index_id" INTEGER NOT NULL,
    "index_name" TEXT NOT NULL,
    "fund_id" INTEGER NOT NULL,
    "fund" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "HFRXConstituents_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Instruments" (
    "id" SERIAL NOT NULL,
    "fund_id" INTEGER NOT NULL,
    "fund" TEXT NOT NULL,
    "instrument" TEXT NOT NULL,
    "allocation" DOUBLE PRECISION NOT NULL,
    "type" TEXT NOT NULL,
    "instrument_date" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Instruments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Regions" (
    "id" SERIAL NOT NULL,
    "fund_id" INTEGER NOT NULL,
    "fund" TEXT NOT NULL,
    "region" TEXT NOT NULL,
    "allocation" DOUBLE PRECISION NOT NULL,
    "type" TEXT NOT NULL,
    "region_date" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Regions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Returns" (
    "id" SERIAL NOT NULL,
    "fund_id" INTEGER NOT NULL,
    "fund" TEXT NOT NULL,
    "performance" DOUBLE PRECISION NOT NULL,
    "nav" DOUBLE PRECISION NOT NULL,
    "performance_date" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Returns_pkey" PRIMARY KEY ("id")
);
