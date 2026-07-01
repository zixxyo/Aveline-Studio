param(
    [string]$Command = "help",
    [string]$Name = ""
)

switch ($Command) {

    "help" {
        Write-Host ""
        Write-Host "==========================" -ForegroundColor Yellow
        Write-Host "AVELINE BUILDER"
        Write-Host "==========================" -ForegroundColor Yellow
        Write-Host ""
        Write-Host "Commands:"
        Write-Host ""
        Write-Host ".\builder.ps1 module Ingredients"
        Write-Host ".\builder.ps1 module Products"
        Write-Host ".\builder.ps1 module Inventory"
        Write-Host ".\builder.ps1 module Suppliers"
        Write-Host ".\builder.ps1 module Manufacturing"
        Write-Host ".\builder.ps1 module Finance"
        Write-Host ""
    }

    "module" {

        if ($Name -eq "") {
            Write-Host "Module name required." -ForegroundColor Red
            exit
        }

        $base = "src/features/$Name"

        $dirs = @(
            "$base",
            "$base/components",
            "$base/pages",
            "$base/services",
            "$base/hooks",
            "$base/types",
            "$base/utils"
        )

        foreach ($d in $dirs) {
            New-Item -ItemType Directory -Force -Path $d | Out-Null
        }

        New-Item -ItemType File -Force "$base/index.ts" | Out-Null

        Write-Host ""
        Write-Host "$Name module created!" -ForegroundColor Green
    }

    Default {
        Write-Host "Unknown command." -ForegroundColor Red
    }
}