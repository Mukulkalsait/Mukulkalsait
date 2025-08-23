{
  description = "Minimal NixOS flake with HyDE";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-24.05"; # stable channel
    hyde.url = "github:HyDE-Project/HyDE";
  };

  outputs = { self, nixpkgs, hyde, ... }@inputs:
    {
      nixosConfigurations.HyDEbox = nixpkgs.lib.nixosSystem {
        system = "x86_64-linux";
        modules = [
          ./configuration.nix
          hyde.nixosModules.default
        ];
      };
    };
}
