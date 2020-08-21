import fs from 'fs'
import path from 'path'
import utilsService from '../services/utilsService'
import { Artigo, Usuario } from '../database/models'

const storeFile = (file) => {
    return new Promise((resolve, reject) => {
        const arquivo = utilsService.renameFile()
        file.mv(utilsService.formatUploadPath(arquivo), (error) => {
            if (error) {
                reject({ error: error })
            } else {
                resolve({ arquivo: arquivo })
            }
        })
    })
}

export default {

    add: (req, res, next) => {
        try {
            if (req.files && 'arquivo' in req.files && req.files.arquivo.name.endsWith('.pdf')) {
                storeFile(req.files.arquivo).then(arquivo => {
                    Artigo.create({ ...arquivo, ...req.body }).then(response => {
                        res.status(201).json({ success: true, artigo: response })
                    })
                }).catch(error => {
                    res.status(500).json({
                        error: error,
                        success: false,
                        message: 'Ocorreu um erro enquanto o arquivo era salvo.'
                    })
                })
            } else {
                res.status(400).json({
                    success: false,
                    message: 'Ocorreu um erro no momento do upload do arquivo.'
                })
            }
        } catch (error) {
            res.status(500).json({
                error: error,
                success: false,
                message: 'Ocorreu um erro desconhecido com o sistema.'
            })
            next(error)
        }
    },

    update: (req, res, next) => {
        try {
            Artigo.findOne({ where: { id: req.params.id } }).then(artigo => {
                if (req.files && 'arquivo' in req.files && req.files.arquivo.name.endsWith('.pdf')) {
                    storeFile(req.files.arquivo).then(arquivo => {
                        artigo.update({ ...arquivo, ...req.body }).then(response => {
                            res.status(200).json({ success: true, artigo: response })
                        })
                    }).catch(error => {
                        res.status(400).json({
                            error: error,
                            success: false,
                            message: 'Ocorreu um erro enquanto os dados eram atualizados.'
                        })
                    })
                } else {
                    return artigo.update(req.body).then(response => {
                        res.status(200).json({ success: true, artigo: response })
                    })
                }
            }).catch(error => {
                res.status(400).json({
                    error: error,
                    success: false,
                    message: 'Ocorreu um erro enquanto os dados eram atualizados.'
                })
            })
        } catch (error) {
            res.status(500).json({
                error: error,
                success: false,
                message: 'Ocorreu um erro desconhecido com o sistema.'
            })
            next(error)
        }
    },

    list: (req, res, next) => {
        try {
            Artigo.findAll({
                attributes: {
                    exclude: ['usuarioId']
                },
                include: [{
                    model: Usuario,
                    as: 'usuario'
                }],
                order: [
                  ['created_at', 'DESC']
                ]
            }).then((response) => {
                res.status(200).json({ success: true, artigos: response })
            }).catch((error) => {
                res.status(400).json({
                    error: error,
                    success: false,
                    message: 'Ocorreu um erro enquanto os dados eram recuperados.'
                })
            })
        } catch (error) {
            res.status(500).json({
                error: error,
                success: false,
                message: 'Ocorreu um erro desconhecido com o sistema.'
            })
            next(error)
        }
    },

    findById: (req, res, next) => {
        try {
            Artigo.findOne({
                where: {
                    id: req.params.id
                },
                attributes: {
                    exclude: ['usuarioId']
                },
                include: [{
                    model: Usuario,
                    as: 'usuario'
                }]
            }).then((response) => {
                if (response) {
                    res.status(200).json({ success: true, artigo: response })
                } else {
                    res.status(404).json({
                        success: false,
                        message: 'O registro solicitado não foi encontrado no sistema.'
                    })
                }
            }).catch((error) => {
                res.status(400).json({
                    error: error,
                    success: false,
                    message: 'Ocorreu um erro enquanto o dado era recuperado.'
                })
            })
        } catch (error) {
            res.status(500).json({
                error: error,
                success: false,
                message: 'Ocorreu um erro desconhecido com o sistema.'
            })
            next(error)
        }
    },

    listAtivos: (req, res, next) => {
        try {
            Artigo.findAll({
                where: {
                    ativo: true
                },
                attributes: {
                    exclude: ['usuarioId']
                },
                include: [{
                    model: Usuario,
                    as: 'usuario'
                }],
                order: [
                  ['created_at', 'DESC']
                ]
            }).then((response) => {
                res.status(200).json({ success: true, artigos: response })
            }).catch((error) => {
                res.status(400).json({
                    error: error,
                    success: false,
                    message: 'Ocorreu um erro enquanto os dados eram recuperados.'
                })
            })
        } catch (error) {
            res.status(500).json({
                error: error,
                success: false,
                message: 'Ocorreu um erro desconhecido com o sistema.'
            })
            next(error)
        }
    },

    activate: (req, res, next) => {
        try {
            Artigo.findOne({ where: { id: req.params.id } }).then(artigo => {
                return artigo.update({ ativo: true }).then(response => {
                    res.status(200).json({ success: true, artigo: response })
                })
            }).catch(error => {
                res.status(400).json({
                    error: error,
                    success: false,
                    message: 'Ocorreu um erro enquanto os dados eram atualizados.'
                })
            })
        } catch (error) {
            res.status(500).json({
                error: error,
                success: false,
                message: 'Ocorreu um erro desconhecido com o sistema.'
            })
            next(error)
        }
    },

    deactivate: (req, res, next) => {
        try {
            Artigo.findOne({ where: { id: req.params.id } }).then(artigo => {
                return artigo.update({ ativo: false }).then(response => {
                    res.status(200).json({ success: true, artigo: response })
                })
            }).catch(error => {
                res.status(400).json({
                    error: error,
                    success: false,
                    message: 'Ocorreu um erro enquanto os dados eram atualizados.'
                })
            })
        } catch (error) {
            res.status(500).json({
                error: error,
                success: false,
                message: 'Ocorreu um erro desconhecido com o sistema.'
            })
            next(error)
        }
    },

    download: (req, res, next) => {
        try {
            Artigo.findOne({ where: { arquivo: req.params.file } }).then(artigo => {
                if (artigo) {
                    res.sendFile(utilsService.formatDownloadPath(artigo), {
                        root: 'uploads/',
                        dotfiles: 'deny',
                        headers: {
                            'x-sent': true,
                            'x-timestamp': Date.now(),
                            'Content-Type': 'application/pdf'
                        }
                    }, (error) => {
                        if (error) {
                            res.status(404).json({
                                error: error,
                                success: false,
                                message: 'O arquivo solicitado não foi encontrado no sistema.'
                            })
                        }
                    })
                } else {
                    res.status(404).json({
                        success: false,
                        message: 'O arquivo solicitado não foi encontrado no sistema.'
                    })
                }
            }).catch(error => {
                res.status(400).json({
                    error: error,
                    success: false,
                    message: 'Ocorreu um erro enquanto os dados eram recuperados.'
                })
            })
        } catch (error) {
            res.status(500).json({
                error: error,
                success: false,
                message: 'Ocorreu um erro desconhecido com o sistema.'
            })
            next(error)
        }
    }

}
