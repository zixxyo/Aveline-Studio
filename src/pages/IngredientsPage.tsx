import React, { useState } from "react";
import { GlassPanel } from "../components/ui/GlassPanel";
import { LuxuryButton } from "../components/ui/LuxuryButton";
import { StatusPill } from "../components/ui/StatusPill";
import { Input } from "../components/ui/Input"; // Assuming an Input component for search
import { Select } from "../components/ui/Select"; // Assuming a Select component for filters
import { Modal } from "../components/ui/Modal"; // Assuming a Modal component

interface Ingredient {
  id: string;
  name: string;
  inci: string;
  category: string;
  func: string;
  supplier: string;
  price: number;
  stock: number;
  unit: string;
  status: "In Stock" | "Low Stock" | "Out of Stock";
  minimumStock: number;
  notes: string;
}

const mockIngredients: Ingredient[] = [
  {
    id: "1",
    name: "Hyaluronic Acid",
    inci: "SODIUM HYALURONATE",
    category: "Humectant",
    func: "Moisturizer",
    supplier: "L'Oreal",
    price: 120.0, // Example price
    stock: 500, // Example stock
    unit: "g",
    status: "In Stock",
    minimumStock: 100,
    notes: "High molecular weight.",
  },
  {
    id: "2",
    name: "Vitamin C",
    inci: "ASCORBIC ACID",
    category: "Antioxidant",
    func: "Brightening",
    supplier: "Merck",
    price: 80.0,
    stock: 50,
    unit: "g",
    status: "Low Stock",
    minimumStock: 75,
    notes: "Stable form of Vitamin C.",
  },
  {
    id: "3",
    name: "Retinol",
    inci: "RETINOL",
    category: "Vitamin",
    func: "Anti-aging",
    supplier: "BASF",
    price: 200.0,
    stock: 0,
    unit: "g",
    status: "Out of Stock",
    minimumStock: 20,
    notes: "Encapsulated retinol.",
  },
  {
    id: "4",
    name: "Niacinamide",
    inci: "NIACINAMIDE",
    category: "Vitamin",
    func: "Brightening, Anti-inflammatory",
    supplier: "DSM",
    price: 60.0,
    stock: 300,
    unit: "g",
    status: "In Stock",
    minimumStock: 50,
    notes: "Vitamin B3 derivative.",
  },
];

const IngredientCard: React.FC<{ ingredient: Ingredient }> = ({ ingredient }) => (
  <div className="bg-gradient-to-br from-gray-800 to-black rounded-lg p-4 shadow-lg text-gold-200">
    <h3 className="text-xl font-bold mb-2">{ingredient.name}</h3>
    <p><strong>INCI:</strong> {ingredient.inci}</p>
    <p><strong>Category:</strong> {ingredient.category}</p>
    <p><strong>Function:</strong> {ingredient.func}</p>
    <p><strong>Supplier:</strong> {ingredient.supplier}</p>
    <p><strong>Price:</strong> ${ingredient.price.toFixed(2)}</p>
    <p><strong>Stock:</strong> {ingredient.stock} {ingredient.unit}</p>
    <p><strong>Status:</strong> <StatusPill status={ingredient.status} /></p>
  </div>
);

export const IngredientsPage: React.FC = () => {
  const [ingredients, setIngredients] = useState<Ingredient[]>(mockIngredients);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [categoryFilter, setCategoryFilter] = useState<string>("");
  const [stockFilter, setStockFilter] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [newIngredient, setNewIngredient] = useState<Omit<Ingredient, "id" | "status">>({ // Omit id and status as they are auto-generated/derived
    name: "",
    inci: "",
    category: "",
    func: "",
    supplier: "",
    price: 0,
    stock: 0,
    unit: "",
    minimumStock: 0,
    notes: "",
  });

  const filteredIngredients = ingredients.filter((ingredient) => {
    const matchesSearch = ingredient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        ingredient.inci.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter ? ingredient.category === categoryFilter : true;
    const matchesStock = stockFilter ? ingredient.status === stockFilter : true;
    return matchesSearch && matchesCategory && matchesStock;
  });

  const handleAddIngredient = () => {
    const status = newIngredient.stock <= newIngredient.minimumStock ? 
                   (newIngredient.stock === 0 ? "Out of Stock" : "Low Stock") : 
                   "In Stock";
    const ingredientToAdd: Ingredient = {
      ...newIngredient,
      id: String(ingredients.length + 1), // Simple ID generation
      status: status, 
    };
    setIngredients([...ingredients, ingredientToAdd]);
    setIsModalOpen(false);
    setNewIngredient({
      name: "",
      inci: "",
      category: "",
      func: "",
      supplier: "",
      price: 0,
      stock: 0,
      unit: "",
      minimumStock: 0,
      notes: "",
    });
  };

  const categories = Array.from(new Set(mockIngredients.map((i) => i.category)));
  const stockStatuses = ["In Stock", "Low Stock", "Out of Stock"];

  return (
    <div className="p-6 bg-gray-900 min-h-screen text-gold-100">
      <h1 className="text-4xl font-bold text-gold-300 mb-8">Ingredients</h1>

      <GlassPanel className="mb-6 p-4 flex flex-col md:flex-row gap-4 justify-between items-center">
        <Input
          type="text"
          placeholder="Search ingredients..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:w-1/3"
        />
        <Select
          options={[{ value: "", label: "All Categories" }, ...categories.map(cat => ({ value: cat, label: cat }))]}
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="w-full md:w-1/4"
        />
        <Select
          options={[{ value: "", label: "All Stock Statuses" }, ...stockStatuses.map(status => ({ value: status, label: status }))]}
          value={stockFilter}
          onChange={(e) => setStockFilter(e.target.value)}
          className="w-full md:w-1/4"
        />
        <LuxuryButton onClick={() => setIsModalOpen(true)} className="w-full md:w-auto">
          Add Ingredient
        </LuxuryButton>
      </GlassPanel>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredIngredients.map((ingredient) => (
          <IngredientCard key={ingredient.id} ingredient={ingredient} />
        ))}
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Add New Ingredient">
        <div className="space-y-4 text-gold-100">
          <Input
            label="Ingredient Name"
            value={newIngredient.name}
            onChange={(e) => setNewIngredient({ ...newIngredient, name: e.target.value })}
            placeholder="e.g., Hyaluronic Acid"
          />
          <Input
            label="INCI"
            value={newIngredient.inci}
            onChange={(e) => setNewIngredient({ ...newIngredient, inci: e.target.value })}
            placeholder="e.g., SODIUM HYALURONATE"
          />
          <Input
            label="Category"
            value={newIngredient.category}
            onChange={(e) => setNewIngredient({ ...newIngredient, category: e.target.value })}
            placeholder="e.g., Humectant"
          />
          <Input
            label="Function"
            value={newIngredient.func}
            onChange={(e) => setNewIngredient({ ...newIngredient, func: e.target.value })}
            placeholder="e.g., Moisturizer"
          />
          <Input
            label="Supplier"
            value={newIngredient.supplier}
            onChange={(e) => setNewIngredient({ ...newIngredient, supplier: e.target.value })}
            placeholder="e.g., L'Oreal"
          />
          <Input
            label="Price"
            type="number"
            value={newIngredient.price}
            onChange={(e) => setNewIngredient({ ...newIngredient, price: parseFloat(e.target.value) })}
            placeholder="e.g., 120.00"
          />
          <Input
            label="Unit"
            value={newIngredient.unit}
            onChange={(e) => setNewIngredient({ ...newIngredient, unit: e.target.value })}
            placeholder="e.g., g"
          />
          <Input
            label="Stock"
            type="number"
            value={newIngredient.stock}
            onChange={(e) => setNewIngredient({ ...newIngredient, stock: parseInt(e.target.value) })}
            placeholder="e.g., 500"
          />
          <Input
            label="Minimum Stock"
            type="number"
            value={newIngredient.minimumStock}
            onChange={(e) => setNewIngredient({ ...newIngredient, minimumStock: parseInt(e.target.value) })}
            placeholder="e.g., 100"
          />
          <Input
            label="Notes"
            value={newIngredient.notes}
            onChange={(e) => setNewIngredient({ ...newIngredient, notes: e.target.value })}
            placeholder="Any additional notes"
          />
          <LuxuryButton onClick={handleAddIngredient} className="w-full">
            Add Ingredient
          </LuxuryButton>
        </div>
      </Modal>
    </div>
  );
};