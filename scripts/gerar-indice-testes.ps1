$ErrorActionPreference = 'Stop'

$repositoryRoot = Split-Path -Parent $PSScriptRoot
$testsRoot = Join-Path $repositoryRoot 'testes'
$manifestPath = Join-Path $testsRoot 'testes.json'

$folders = @{}
Get-ChildItem $testsRoot -Recurse -File -Filter '*.html' |
  Where-Object {
    $_.Name -ne 'index.html' -and
    $_.DirectoryName -ne $testsRoot -and
    $_.DirectoryName -notlike '*\_infra_testes' -and
    $_.DirectoryName -notlike '*\_infra_testes\*'
  } |
  ForEach-Object {
    $relativePath = $_.FullName.Substring($testsRoot.Length + 1).Replace('\', '/')
    $parts = $relativePath.Split('/')
    $fileName = $parts[-1]
    $folder = ($parts[0..($parts.Length - 2)] -join '/')

    if (-not $folders.ContainsKey($folder)) {
      $folders[$folder] = [System.Collections.Generic.List[object]]::new()
    }

    $folders[$folder].Add([ordered]@{ name = $fileName })
  }

$manifest = foreach ($folder in ($folders.Keys | Sort-Object)) {
  [ordered]@{
    folder = $folder
    files = @($folders[$folder] | Sort-Object name)
  }
}

$json = @($manifest) | ConvertTo-Json -Depth 4
[System.IO.File]::WriteAllText($manifestPath, $json + [Environment]::NewLine, [System.Text.UTF8Encoding]::new($false))
Write-Output "Índice gerado: $manifestPath"
