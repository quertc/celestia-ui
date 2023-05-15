// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

mod error;

use error::CelestiaResult;
use serde::{Deserialize, Serialize};
use serde_json::json;

use std::time::Duration;

#[derive(Serialize, Deserialize)]
struct Transaction {
    height: u64,
    txhash: String,
}

#[tauri::command]
async fn submit_pfb_transaction(
    node_url: String,
    namespace_id: String,
    data: String,
    gas_limit: u64,
    fee: u64,
) -> CelestiaResult<Transaction> {
    let client = reqwest::Client::builder()
        .timeout(Duration::from_millis(30000))
        .build()?;

    let res = client
        .post(node_url)
        .json(&json!({
            "namespace_id": namespace_id,
            "data": data,
            "gas_limit": gas_limit,
            "fee": fee
        }))
        .send()
        .await?;

    if !res.status().is_success() {
        return Err(error::CelestiaUIError::Request(format!(
            "request failed with status: {}",
            res.status()
        )));
    }

    let txn = res.json::<Transaction>().await?;

    Ok(txn)
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![submit_pfb_transaction])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
