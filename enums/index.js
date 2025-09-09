// Document Types for User Info
export var DocumentType;
(function (DocumentType) {
    DocumentType["PASSPORT"] = "passport";
    DocumentType["NATIONAL_ID"] = "national_id";
    DocumentType["DRIVER_LICENSE"] = "driver_license";
    DocumentType["BIRTH_CERTIFICATE"] = "birth_certificate";
    DocumentType["UTILITY_BILL"] = "utility_bill";
    DocumentType["BANK_STATEMENT"] = "bank_statement";
    DocumentType["EMPLOYMENT_LETTER"] = "employment_letter";
    DocumentType["TAX_DOCUMENT"] = "tax_document";
    DocumentType["OTHER"] = "other";
})(DocumentType || (DocumentType = {}));
// Document Status
export var DocumentStatus;
(function (DocumentStatus) {
    DocumentStatus["PENDING"] = "pending";
    DocumentStatus["UPLOADED"] = "uploaded";
    DocumentStatus["VERIFIED"] = "verified";
    DocumentStatus["REJECTED"] = "rejected";
    DocumentStatus["EXPIRED"] = "expired";
})(DocumentStatus || (DocumentStatus = {}));
