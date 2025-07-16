import { SapQuotation, SapQuotationLine } from "@/domain/entities/sapQuotation"

export interface SapQuotationResponseDto {
    docNum: number;
    cardCode: string;
    cardName: string;
    address: string;
    address2: string | null;
    docTotal: number;
    docCurrency: string;
    docRate: number;
    journalMemo: string;
    salesPersonCode: number;
    federalTaxId: string;
    discountPercent: number;
    documentLine: SapQuotationLine[];
}


export const mapQuotationToDto = (quotation: SapQuotation): SapQuotationResponseDto => {
    return {
        docNum: quotation.docNum,
        cardCode: quotation.cardCode,
        cardName: quotation.cardName,
        address: quotation.address,
        address2: quotation.address2,
        docTotal: quotation.docTotal,
        docCurrency: quotation.docCurrency,
        docRate: quotation.docRate,
        journalMemo: quotation.journalMemo,
        salesPersonCode: quotation.salesPersonCode,
        federalTaxId: quotation.federalTaxId,
        discountPercent: quotation.discountPercent,
        documentLine: quotation.documentLine.map(line => ({
            docEntry: line.docEntry,
            docNum: line.docNum,
            lineNum: line.lineNum,
            itemCode: line.itemCode,
            itemDescription: line.itemDescription,
            quantity: line.quantity,
            price: line.price,
            lineTotal: line.lineTotal,
            discountPercent: line.discountPercent,
            priceAfterVat: line.priceAfterVat,
            taxCode: line.taxCode,
        })),
    }
}