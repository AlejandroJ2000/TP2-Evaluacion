import FacturasService from "../services/service.js";

class FacturasController {
    constructor() {
        this.facturasService = new FacturasService()
    }

    getFacturas = async(req, res) => {
        try {
            const facturas = await this.facturasService.getFacturas()
            res.status(200).json(facturas)
        } catch(error) {
            res.status(500).json({ error: " Error fetching facturas " })
        }
    }

    postFacturas = async(req, res) => {
        try {
            const newFactura = req.body
            if (!newFactura || !newFactura.numero || !newFactura.tipo || !newFactura.monto || !newFactura.estado) {
                return res.status(400).json({ error: "Factura or some mandatory fields are required" })
            }
            const createdFactura = await this.facturasService.postFacturas(newFactura)
            res.status(201).json(createdFactura)
        } catch(error) {
            res.status(500).json({ error: " Error creating factura " })
        }
    }

    getFacturasPorTipo = async(req, res) => {
        try {
            const { tipo } = req.params
            if (!tipo) {
                return res.status(400).json({ error: "Tipo is required" })
            }

            const facturas = await this.facturasService.getFacturasPorTipo(tipo.toUpperCase())
            res.status(200).json(facturas)
        } catch (error) {
            res.status(500).json({ error: " Error fetching specified factura " })
        }
    }

    getFacturasPorEstado = async (req, res) => {
        try {
            const { estado } = req.params
            if (!estado) {
                return res.status(400).json({ error: "Estado is required" })
            }

            const facturas = await this.facturasService.getFacturasPorEstado(estado)
            res.status(200).json(facturas)
        } catch (error) {
            res.status(500).json({ error: " Error fetching specified factura " })
        }
    }
}
export default FacturasController