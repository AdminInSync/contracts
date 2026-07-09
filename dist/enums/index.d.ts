export declare enum DocumentType {
    PASSPORT = "passport",
    NATIONAL_ID = "national_id",
    DRIVER_LICENSE = "driver_license",
    BIRTH_CERTIFICATE = "birth_certificate",
    UTILITY_BILL = "utility_bill",
    BANK_STATEMENT = "bank_statement",
    EMPLOYMENT_LETTER = "employment_letter",
    TAX_DOCUMENT = "tax_document",
    OTHER = "other"
}
export declare enum DocumentStatus {
    PENDING = "pending",
    UPLOADED = "uploaded",
    VERIFIED = "verified",
    REJECTED = "rejected",
    EXPIRED = "expired"
}
export declare enum EmailProvider {
    GMAIL = "gmail",
    OUTLOOK = "outlook"
}
export declare enum EmailConnectionStatus {
    PENDING = "pending",
    ACTIVE = "active",
    ERROR = "error",
    REVOKED = "revoked"
}
export declare enum FinancialEmailEventStatus {
    DISCOVERED = "discovered",
    PARSED = "parsed",
    PENDING_REVIEW = "pending_review",
    APPROVED = "approved",
    REJECTED = "rejected",
    IMPORTED = "imported"
}
