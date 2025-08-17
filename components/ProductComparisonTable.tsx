import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { comparisonData } from "@/lib/data"

export default function ProductComparisonTable() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-center mb-12 text-gray-800">
        Compare Our Chips
      </h2>
      <div className="overflow-x-auto bg-white rounded-xl shadow-lg p-4">
        <Table className="min-w-full divide-y divide-gray-200">
          <TableHeader className="bg-gray-50">
            <TableRow>
              <TableHead className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Feature
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Beetroot Chips
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Carrot Chips
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Avocado Chips
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="bg-white divide-y divide-gray-200">
            {comparisonData.map((row, index) => (
              <TableRow key={index}>
                <TableCell className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {row.feature}
                </TableCell>
                <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{row.beetroot}</TableCell>
                <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{row.carrot}</TableCell>
                <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{row.avocado}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
