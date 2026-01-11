import React from "react";
import type { IProductVariant } from "../../../shared/models/product-model";
import { motion, AnimatePresence } from "framer-motion";

interface VariantsSectionProps {
    variants: IProductVariant[];
    onAdd: () => void;
    onRemove: (index: number) => void;
    onChange: (index: number, field: keyof IProductVariant, value: any) => void;
    inputClass: string;
}

const VariantsSection: React.FC<VariantsSectionProps> = ({
    variants,
    onAdd,
    onRemove,
    onChange,
    inputClass,
}) => {
    return (
        <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-button2">
                        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                        <line x1="8" y1="21" x2="16" y2="21"></line>
                        <line x1="12" y1="17" x2="12" y2="21"></line>
                    </svg>
                    Variants
                </h3>
                <button
                    type="button"
                    onClick={onAdd}
                    className="text-sm font-semibold text-button2 hover:text-hoverButton hover:bg-red-50 px-3 py-1.5 rounded-lg transition-colors border border-red-200"
                >
                    + Add Variant
                </button>
            </div>
            <div className="space-y-4">
                <AnimatePresence>
                    {variants?.map((variant, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm relative group"
                        >
                            <button
                                type="button"
                                onClick={() => onRemove(index)}
                                className="absolute top-4 right-4 text-gray-300 hover:text-red-500 transition-colors"
                                title="Remove Variant"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                            </button>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 pr-8">
                                <div>
                                    <label className="text-xs text-gray-500 mb-1 block">Version</label>
                                    <input
                                        placeholder="e.g. 128GB"
                                        value={variant.version}
                                        onChange={(e) => onChange(index, "version", e.target.value)}
                                        className={inputClass}
                                    />
                                </div>
                                <div>
                                    <label className="text-xs text-gray-500 mb-1 block">Color</label>
                                    <input
                                        placeholder="Color Name"
                                        value={variant.colorName}
                                        onChange={(e) => onChange(index, "colorName", e.target.value)}
                                        className={inputClass}
                                    />
                                </div>
                                <div>
                                    <label className="text-xs text-gray-500 mb-1 block">Price</label>
                                    <input
                                        placeholder="0"
                                        type="number"
                                        value={variant.price}
                                        onChange={(e) => onChange(index, "price", Number(e.target.value))}
                                        className={inputClass}
                                    />
                                </div>
                                <div>
                                    <label className="text-xs text-gray-500 mb-1 block">Stock</label>
                                    <input
                                        placeholder="0"
                                        type="number"
                                        value={variant.quantity}
                                        onChange={(e) => onChange(index, "quantity", Number(e.target.value))}
                                        className={inputClass}
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="text-xs text-gray-500 mb-1 block">Image URLs (comma separated)</label>
                                <input
                                    placeholder="https://example.com/image1.jpg, ..."
                                    value={variant.images?.join(", ")}
                                    onChange={(e) => onChange(index, "images", e.target.value)}
                                    className={inputClass}
                                />
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
                {(!variants || variants.length === 0) && (
                    <div className="text-center py-4 text-gray-400 text-sm italic">
                        No variants added yet.
                    </div>
                )}
            </div>
        </div>
    );
};

export default VariantsSection;
